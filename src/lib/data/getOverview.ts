import { createClient } from "@/lib/supabase/server";
import { isDemoUser } from "@/lib/auth/isDemoUser";
import demoData from "./data.json";
import type { Transaction, Budget, Pot } from "@/types";
import type { RecurringBillsSummaryData } from "./getRecurringBills";

const DUE_SOON_DAYS = 5;

export type OverviewData = {
  balance: number;
  income: number;
  expenses: number;
  totalSaved: number;
  pots: Pick<Pot, "id" | "name" | "saved" | "theme">[];
  budgets: {
    id: string;
    category: string;
    maximum: number;
    spent: number;
    theme: string;
  }[];
  totalSpent: number;
  totalLimit: number;
  transactions: Pick<
    Transaction,
    "id" | "name" | "avatar" | "amount" | "date"
  >[];
  bills: RecurringBillsSummaryData;
};

export async function getOverview(): Promise<OverviewData> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const empty: OverviewData = {
    balance: 0,
    income: 0,
    expenses: 0,
    totalSaved: 0,
    pots: [],
    budgets: [],
    totalSpent: 0,
    totalLimit: 0,
    transactions: [],
    bills: {
      totalBills: 0,
      paidCount: 0,
      paidTotal: 0,
      upcomingCount: 0,
      upcomingTotal: 0,
      dueSoonCount: 0,
      dueSoonTotal: 0,
    },
  };

  if (!user) return empty;

  let transactions: Transaction[] = [];
  let budgets: Budget[] = [];
  let pots: Pot[] = [];

  if (isDemoUser(user.id)) {
    transactions = demoData.transactions.map((t, i) => ({
      ...t,
      id: `demo-tx-${i + 1}`,
      user_id: user.id,
    })) as Transaction[];

    budgets = demoData.budgets.map((b, i) => ({
      id: `demo-budget-${i + 1}`,
      user_id: user.id,
      category: b.category as Budget["category"],
      maximum: b.maximum,
      theme: b.theme,
    }));

    pots = demoData.pots.map((p, i) => ({
      id: `demo-pot-${i + 1}`,
      user_id: user.id,
      name: p.name,
      target: p.target,
      saved: p.saved,
      theme: p.theme,
    }));
  } else {
    const [txRes, budgetRes, potRes] = await Promise.all([
      supabase.from("transactions").select("*").eq("user_id", user.id),
      supabase.from("budgets").select("*").eq("user_id", user.id),
      supabase.from("pots").select("*").eq("user_id", user.id),
    ]);
    transactions = txRes.data ?? [];
    budgets = budgetRes.data ?? [];
    pots = potRes.data ?? [];
  }

  const latestTx =
    transactions.length > 0
      ? [...transactions].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        )[0]
      : null;

  const referenceDate = latestTx ? new Date(latestTx.date) : new Date();
  const referenceMonth = referenceDate.toISOString().slice(0, 7);

  // Summary
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((s, t) => s + t.amount, 0);
  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((s, t) => s + Math.abs(t.amount), 0);
  const balance = income - expenses;

  // Pots
  const totalSaved = pots.reduce((s, p) => s + p.saved, 0);
  const topPots = pots.slice(0, 4).map((p) => ({
    id: p.id,
    name: p.name,
    saved: p.saved,
    theme: p.theme,
  }));

  // Budgets — spent = expenses in reference month only
  const budgetData = budgets.map((b) => {
    const spent = transactions
      .filter(
        (t) =>
          t.category === b.category &&
          t.date.startsWith(referenceMonth) &&
          t.amount < 0,
      )
      .reduce((s, t) => s + Math.abs(t.amount), 0);

    return {
      id: b.id,
      category: b.category,
      maximum: b.maximum,
      spent,
      theme: b.theme,
    };
  });

  const totalSpent = budgetData.reduce((s, b) => s + b.spent, 0);
  const totalLimit = budgetData.reduce((s, b) => s + b.maximum, 0);

  // Latest 5 transactions
  const latest5 = [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)
    .map((t) => ({
      id: t.id,
      name: t.name,
      avatar: t.avatar,
      amount: t.amount,
      date: t.date,
    }));

  // Recurring bills summary
  const recurringTx = transactions.filter((t) => t.recurring);

  const vendorMap = new Map<string, Transaction>();
  for (const tx of recurringTx) {
    const existing = vendorMap.get(tx.name);
    if (!existing || new Date(tx.date) > new Date(existing.date)) {
      vendorMap.set(tx.name, tx);
    }
  }

  const referenceDay = referenceDate.getDate();

  const recurringBills = Array.from(vendorMap.values()).map((tx) => {
    const dayOfMonth = new Date(tx.date).getDate();

    const isPaid = recurringTx.some(
      (t) => t.name === tx.name && t.date.startsWith(referenceMonth),
    );

    const isDueSoon =
      !isPaid &&
      dayOfMonth > referenceDay &&
      dayOfMonth <= referenceDay + DUE_SOON_DAYS;

    return { amount: Math.abs(tx.amount), isPaid, isDueSoon };
  });

  const paid = recurringBills.filter((b) => b.isPaid);
  const upcoming = recurringBills.filter((b) => !b.isPaid);
  const dueSoon = recurringBills.filter((b) => b.isDueSoon);

  const bills: RecurringBillsSummaryData = {
    totalBills: recurringBills.reduce((s, b) => s + b.amount, 0),
    paidCount: paid.length,
    paidTotal: paid.reduce((s, b) => s + b.amount, 0),
    upcomingCount: upcoming.length,
    upcomingTotal: upcoming.reduce((s, b) => s + b.amount, 0),
    dueSoonCount: dueSoon.length,
    dueSoonTotal: dueSoon.reduce((s, b) => s + b.amount, 0),
  };

  return {
    balance,
    income,
    expenses,
    totalSaved,
    pots: topPots,
    budgets: budgetData,
    totalSpent,
    totalLimit,
    transactions: latest5,
    bills,
  };
}

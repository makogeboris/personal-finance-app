import { createClient } from "@/lib/supabase/server";
import { isDemoUser } from "@/lib/auth/isDemoUser";
import demoData from "./data.json";
import type { Transaction } from "@/types";

export type RecurringBill = {
  id: string;
  name: string;
  avatar: string;
  amount: number;
  dayOfMonth: number;
  isPaid: boolean;
  isDueSoon: boolean;
};

export type RecurringBillsSummaryData = {
  totalBills: number;
  paidCount: number;
  paidTotal: number;
  upcomingCount: number;
  upcomingTotal: number;
  dueSoonCount: number;
  dueSoonTotal: number;
};

const REFERENCE_DATE = new Date("2026-08-19");
const REFERENCE_MONTH = "2026-08";
const DUE_SOON_DAYS = 5;

export async function getRecurringBills(): Promise<{
  bills: RecurringBill[];
  summary: RecurringBillsSummaryData;
}> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { bills: [], summary: emptySummary() };

  let transactions: Transaction[] = [];

  if (isDemoUser(user.id)) {
    transactions = demoData.transactions.map((t, i) => ({
      ...t,
      id: `demo-tx-${i + 1}`,
      user_id: user.id,
    })) as Transaction[];
  } else {
    const { data } = await supabase
      .from("transactions")
      .select("*")
      .eq("user_id", user.id);
    transactions = data ?? [];
  }

  const recurringTx = transactions.filter((t) => t.recurring);

  const vendorMap = new Map<string, Transaction>();
  for (const tx of recurringTx) {
    const existing = vendorMap.get(tx.name);
    if (!existing || new Date(tx.date) > new Date(existing.date)) {
      vendorMap.set(tx.name, tx);
    }
  }

  const bills: RecurringBill[] = Array.from(vendorMap.values()).map((tx) => {
    const dayOfMonth = new Date(tx.date).getDate();

    const isPaid = recurringTx.some(
      (t) => t.name === tx.name && t.date.startsWith(REFERENCE_MONTH),
    );

    const referenceDay = REFERENCE_DATE.getDate();
    const isDueSoon =
      !isPaid &&
      dayOfMonth > referenceDay &&
      dayOfMonth <= referenceDay + DUE_SOON_DAYS;

    return {
      id: tx.id,
      name: tx.name,
      avatar: tx.avatar,
      amount: Math.abs(tx.amount),
      dayOfMonth,
      isPaid,
      isDueSoon,
    };
  });

  const paid = bills.filter((b) => b.isPaid);
  const upcoming = bills.filter((b) => !b.isPaid);
  const dueSoon = bills.filter((b) => b.isDueSoon);

  const summary: RecurringBillsSummaryData = {
    totalBills: bills.reduce((s, b) => s + b.amount, 0),
    paidCount: paid.length,
    paidTotal: paid.reduce((s, b) => s + b.amount, 0),
    upcomingCount: upcoming.length,
    upcomingTotal: upcoming.reduce((s, b) => s + b.amount, 0),
    dueSoonCount: dueSoon.length,
    dueSoonTotal: dueSoon.reduce((s, b) => s + b.amount, 0),
  };

  return { bills, summary };
}

function emptySummary(): RecurringBillsSummaryData {
  return {
    totalBills: 0,
    paidCount: 0,
    paidTotal: 0,
    upcomingCount: 0,
    upcomingTotal: 0,
    dueSoonCount: 0,
    dueSoonTotal: 0,
  };
}

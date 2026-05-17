import { createClient } from "@/lib/supabase/server";
import { isDemoUser } from "@/lib/auth/isDemoUser";
import demoData from "./data.json";
import type { Budget, BudgetWithData, Transaction } from "@/types";

export async function getBudgets(): Promise<BudgetWithData[]> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  let budgets: Budget[] = [];
  let transactions: Transaction[] = [];

  if (isDemoUser(user.id)) {
    budgets = demoData.budgets.map((b, i) => ({
      id: `demo-budget-${i + 1}`,
      user_id: user.id,
      category: b.category as Budget["category"],
      maximum: b.maximum,
      theme: b.theme,
    }));
    transactions = demoData.transactions.map((t, i) => ({
      ...t,
      id: `demo-tx-${i + 1}`,
      user_id: user.id,
    })) as Transaction[];
  } else {
    const [{ data: budgetData }, { data: txData }] = await Promise.all([
      supabase.from("budgets").select("*").eq("user_id", user.id),
      supabase.from("transactions").select("*").eq("user_id", user.id),
    ]);
    budgets = budgetData ?? [];
    transactions = txData ?? [];
  }

  let budgetMonth: string;

  if (transactions.length > 0) {
    const latest = transactions.reduce((a, b) =>
      new Date(a.date) > new Date(b.date) ? a : b,
    );
    budgetMonth = latest.date.slice(0, 7);
  } else {
    const now = new Date();
    budgetMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  }

  return budgets.map((budget) => {
    const categoryTx = transactions.filter(
      (t) => t.category === budget.category,
    );

    const spent = categoryTx
      .filter((t) => t.date.startsWith(budgetMonth) && t.amount < 0)
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    const remaining = Math.max(budget.maximum - spent, 0);

    const latestTransactions = [...categoryTx]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);

    return { ...budget, spent, remaining, latestTransactions };
  });
}

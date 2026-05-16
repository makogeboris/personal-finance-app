import { createClient } from "@/lib/supabase/server";
import { isDemoUser } from "@/lib/auth/isDemoUser";
import demoData from "./data.json";
import type { Transaction } from "@/types";

export async function getTransactions() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { transactions: [] };

  if (isDemoUser(user.id)) {
    return { transactions: demoData.transactions as Transaction[] };
  }

  const { data } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", user.id)
    .order("date", { ascending: false });

  return { transactions: data ?? [] };
}

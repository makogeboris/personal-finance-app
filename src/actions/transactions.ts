"use server";

import { createClient } from "@/lib/supabase/server";
import { isDemoUser } from "@/lib/auth/isDemoUser";
import { revalidatePath } from "next/cache";

export async function addTransactionAction(data: {
  name: string;
  amount: number;
  category: string;
  date: string;
  recurring: boolean;
  type: "income" | "expense";
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (isDemoUser(user.id)) {
    return { error: "Demo accounts cannot add transactions." };
  }

  const amount =
    data.type === "income" ? Math.abs(data.amount) : -Math.abs(data.amount);

  const avatar = data.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const { error } = await supabase.from("transactions").insert({
    user_id: user.id,
    name: data.name,
    amount,
    category: data.category,
    date: data.date,
    recurring: data.recurring,
    avatar,
  });

  if (error) return { error: error.message };

  revalidatePath("/transactions");
  revalidatePath("/budgets");
  revalidatePath("/overview");

  return { success: true };
}

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { createClient } from "@supabase/supabase-js";
import data from "./data.json";

// Uses service role key to bypass RLS
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const DEMO_USER_ID = process.env.DEMO_USER_ID!;

async function seed() {
  console.log("🌱 Seeding demo data...");

  const transactions = data.transactions.map((t) => ({
    user_id: DEMO_USER_ID,
    name: t.name,
    amount: t.amount,
    category: t.category,
    date: t.date,
    recurring: t.recurring,
    avatar: t.avatar.split("/").pop() ?? "",
  }));

  const { error: txError } = await supabase
    .from("transactions")
    .insert(transactions);

  if (txError) {
    console.error("❌ Transactions error:", txError.message);
    return;
  }
  console.log(`✅ Inserted ${transactions.length} transactions`);

  const budgets = data.budgets.map((b) => ({
    user_id: DEMO_USER_ID,
    category: b.category,
    maximum: b.maximum,
    theme: b.theme,
  }));

  const { error: budgetError } = await supabase.from("budgets").insert(budgets);

  if (budgetError) {
    console.error("❌ Budgets error:", budgetError.message);
    return;
  }
  console.log(`✅ Inserted ${budgets.length} budgets`);

  const pots = data.pots.map((p) => ({
    user_id: DEMO_USER_ID,
    name: p.name,
    target: p.target,
    saved: p.saved,
    theme: p.theme,
  }));

  const { error: potsError } = await supabase.from("pots").insert(pots);

  if (potsError) {
    console.error("❌ Pots error:", potsError.message);
    return;
  }
  console.log(`✅ Inserted ${pots.length} pots`);

  console.log("🎉 Demo data seeded successfully");
}

seed();

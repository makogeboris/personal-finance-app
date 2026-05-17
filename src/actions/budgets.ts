"use server";

import { createClient } from "@/lib/supabase/server";
import { isDemoUser } from "@/lib/auth/isDemoUser";
import { revalidatePath } from "next/cache";

const COLOR_MAP: Record<string, string> = {
  green: "#277C78",
  yellow: "#F2CDAC",
  cyan: "#82C9D7",
  navy: "#626070",
  red: "#C94736",
  purple: "#826CB0",
  "purple-light": "#AF81BA",
  turquoise: "#597C7C",
  brown: "#93674F",
  magenta: "#934F6F",
  blue: "#3F82B2",
  "navy-grey": "#97A0AC",
  "army-green": "#7F9161",
  gold: "#CAB361",
  orange: "#BE6C49",
};

export async function addBudgetAction(data: {
  category: string;
  maximum: number;
  theme: string;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (isDemoUser(user.id)) {
    return { error: "Demo accounts cannot create budgets." };
  }

  const { error } = await supabase.from("budgets").insert({
    user_id: user.id,
    category: data.category,
    maximum: data.maximum,
    theme: COLOR_MAP[data.theme] ?? data.theme,
  });

  if (error) return { error: error.message };

  revalidatePath("/budgets");
  return { success: true };
}

export async function editBudgetAction(data: {
  id: string;
  category: string;
  maximum: number;
  theme: string;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (isDemoUser(user.id)) {
    return { error: "Demo accounts cannot edit budgets." };
  }

  const { error } = await supabase
    .from("budgets")
    .update({
      category: data.category,
      maximum: data.maximum,
      theme: COLOR_MAP[data.theme] ?? data.theme,
    })
    .eq("id", data.id)
    .eq("user_id", user.id);

  if (error) return { error: error.message };

  revalidatePath("/budgets");
  return { success: true };
}

export async function deleteBudgetAction(id: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (isDemoUser(user.id)) {
    return { error: "Demo accounts cannot delete budgets." };
  }

  const { error } = await supabase
    .from("budgets")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) return { error: error.message };

  revalidatePath("/budgets");
  return { success: true };
}

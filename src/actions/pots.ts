"use server";

import { createClient } from "@/lib/supabase/server";
import { isDemoUser } from "@/lib/auth/isDemoUser";
import { revalidatePath } from "next/cache";
import { COLOR_MAP } from "@/lib/constants/categories";

export async function addPotAction(data: {
  name: string;
  target: number;
  theme: string;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (isDemoUser(user.id)) {
    return { error: "Demo accounts cannot add pots." };
  }

  const { error } = await supabase.from("pots").insert({
    user_id: user.id,
    name: data.name,
    target: data.target,
    saved: 0,
    theme: COLOR_MAP[data.theme] ?? data.theme,
  });

  if (error) return { error: error.message };

  revalidatePath("/pots");
  revalidatePath("/overview");
  return { success: true };
}

export async function editPotAction(data: {
  id: string;
  name: string;
  target: number;
  theme: string;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (isDemoUser(user.id)) {
    return { error: "Demo accounts cannot edit pots." };
  }

  const { error } = await supabase
    .from("pots")
    .update({
      name: data.name,
      target: data.target,
      theme: COLOR_MAP[data.theme] ?? data.theme,
    })
    .eq("id", data.id)
    .eq("user_id", user.id);

  if (error) return { error: error.message };

  revalidatePath("/pots");
  revalidatePath("/overview");
  return { success: true };
}

export async function deletePotAction(id: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (isDemoUser(user.id)) {
    return { error: "Demo accounts cannot delete pots." };
  }

  const { error } = await supabase
    .from("pots")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) return { error: error.message };

  revalidatePath("/pots");
  revalidatePath("/overview");
  return { success: true };
}

export async function addToPotAction(id: string, amount: number) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (isDemoUser(user.id)) {
    return { error: "Demo accounts cannot add to pots." };
  }

  const { data: pot, error: fetchError } = await supabase
    .from("pots")
    .select("saved, target")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  if (fetchError || !pot) return { error: "Pot not found" };

  const newSaved = Math.min(pot.saved + amount, pot.target);

  const { error } = await supabase
    .from("pots")
    .update({ saved: newSaved })
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) return { error: error.message };

  revalidatePath("/pots");
  revalidatePath("/overview");
  return { success: true };
}

export async function withdrawFromPotAction(id: string, amount: number) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (isDemoUser(user.id)) {
    return { error: "Demo accounts cannot withdraw from pots." };
  }

  const { data: pot, error: fetchError } = await supabase
    .from("pots")
    .select("saved")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  if (fetchError || !pot) return { error: "Pot not found" };
  if (amount > pot.saved)
    return { error: "Cannot withdraw more than saved amount." };

  const { error } = await supabase
    .from("pots")
    .update({ saved: pot.saved - amount })
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) return { error: error.message };

  revalidatePath("/pots");
  revalidatePath("/overview");
  return { success: true };
}

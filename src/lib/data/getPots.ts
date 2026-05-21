import { createClient } from "@/lib/supabase/server";
import { isDemoUser } from "@/lib/auth/isDemoUser";
import demoData from "./data.json";
import type { Pot } from "@/types";

export async function getPots(): Promise<Pot[]> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  if (isDemoUser(user.id)) {
    return demoData.pots.map((p, i) => ({
      id: `demo-pot-${i + 1}`,
      user_id: user.id,
      name: p.name,
      target: p.target,
      saved: p.saved,
      theme: p.theme,
    }));
  }

  const { data } = await supabase
    .from("pots")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: true });

  return data ?? [];
}

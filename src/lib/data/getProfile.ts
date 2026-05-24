import { createClient } from "@/lib/supabase/server";
import { isDemoUser } from "@/lib/auth/isDemoUser";

export type ProfileData = {
  id: string;
  name: string;
  email: string;
  isDemo: boolean;
  joinedAt: string;
};

export async function getProfile(): Promise<ProfileData | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("name, created_at")
    .eq("id", user.id)
    .single();

  return {
    id: user.id,
    name: profile?.name ?? user.user_metadata?.name ?? "",
    email: user.email ?? "",
    isDemo: isDemoUser(user.id),
    joinedAt: profile?.created_at ?? user.created_at,
  };
}

"use server";

import { createClient } from "@/lib/supabase/server";
import { isDemoUser } from "@/lib/auth/isDemoUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient as createClient2 } from "@supabase/supabase-js";

export async function updateNameAction(data: { name: string }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  const formattedName = data.name.trim();

  if (isDemoUser(user.id)) {
    return {
      error:
        "Demo accounts cannot be modified. Create a free account to manage your settings.",
    };
  }

  const [profileResult, authResult] = await Promise.all([
    supabase.from("profiles").update({ name: formattedName }).eq("id", user.id),
    supabase.auth.updateUser({
      data: { name: formattedName },
    }),
  ]);

  if (profileResult.error) return { error: profileResult.error.message };
  if (authResult.error) return { error: authResult.error.message };

  revalidatePath("/profile");
  return { success: true };
}

export async function updateEmailAction(data: { email: string }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (isDemoUser(user.id)) {
    return { error: "Demo accounts cannot be modified." };
  }

  const { error } = await supabase.auth.updateUser(
    { email: data.email },
    {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/email-confirmed`,
    },
  );

  if (error) return { error: error.message };

  return {
    success: true,
    message: "Verification email sent. Check your inbox.",
  };
}

export async function updatePasswordAction(data: {
  currentPassword: string;
  password: string;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (isDemoUser(user.id)) {
    return {
      error:
        "Demo accounts cannot be modified. Create a free account to manage your settings.",
    };
  }

  const { error: verifyError } = await supabase.auth.signInWithPassword({
    email: user.email!,
    password: data.currentPassword,
  });

  if (verifyError) {
    return { error: "Current password is incorrect." };
  }

  const { error } = await supabase.auth.updateUser({
    password: data.password,
  });

  if (error) return { error: error.message };

  return { success: true };
}

export async function deleteAccountAction() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (isDemoUser(user.id)) {
    return { error: "Demo accounts cannot be deleted." };
  }

  await Promise.all([
    supabase.from("transactions").delete().eq("user_id", user.id),
    supabase.from("budgets").delete().eq("user_id", user.id),
    supabase.from("pots").delete().eq("user_id", user.id),
    supabase.from("profiles").delete().eq("id", user.id),
  ]);

  await supabase.auth.signOut();

  const adminClient = createClient2(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
  await adminClient.auth.admin.deleteUser(user.id);

  redirect("/");
}

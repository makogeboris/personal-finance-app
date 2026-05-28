"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function loginAction(data: { email: string; password: string }) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    return { error: error.message };
  }

  redirect("/overview");
}

export async function signupAction(data: {
  name: string;
  email: string;
  password: string;
}) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: { name: data.name },
    },
  });

  if (error) {
    return { error: error.message };
  }

  redirect("/overview");
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export async function forgotPasswordAction(data: { email: string }) {
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`,
  });

  if (error) console.error(error);

  return { success: true };
}

export async function resetPasswordAction(data: {
  password: string;
  code?: string;
}) {
  const supabase = await createClient();

  // Exchange the PKCE code for a session if provided
  if (data.code) {
    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(
      data.code,
    );
    if (exchangeError) return { error: exchangeError.message };
  }

  const { error } = await supabase.auth.updateUser({
    password: data.password,
  });

  if (error) return { error: error.message };

  return { success: true };
}

export async function demoLoginAction() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: process.env.DEMO_USER_EMAIL!,
    password: process.env.DEMO_USER_PASSWORD!,
  });

  if (error) {
    return { error: error.message };
  }

  redirect("/overview");
}

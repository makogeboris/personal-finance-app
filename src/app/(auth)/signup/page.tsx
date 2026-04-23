import type { Metadata } from "next";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignupPage() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center p-6 lg:p-10">
      <div className="w-full max-w-lg lg:max-w-4xl">
        <SignupForm />
      </div>
    </div>
  );
}

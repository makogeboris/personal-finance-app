import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Forgot Password",
};

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-[85svh] w-full flex-col items-center justify-center p-6 md:min-h-svh md:p-10">
      <div className="w-full max-w-lg md:max-w-4xl">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}

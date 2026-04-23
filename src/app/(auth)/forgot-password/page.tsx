import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Forgot Password",
};

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-[85svh] w-full flex-col items-center justify-center p-6 lg:min-h-svh lg:p-10">
      <div className="w-full max-w-lg lg:max-w-4xl">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}

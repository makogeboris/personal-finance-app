import type { Metadata } from "next";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";

export const metadata: Metadata = {
  title: "Reset Password",
};

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-[85svh] w-full flex-col items-center justify-center p-6 md:min-h-svh md:p-10">
      <div className="w-full max-w-lg md:max-w-4xl">
        <ResetPasswordForm />
      </div>
    </div>
  );
}

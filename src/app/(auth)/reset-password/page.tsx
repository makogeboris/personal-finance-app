import type { Metadata } from "next";
import { Suspense } from "react";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";

export const metadata: Metadata = {
  title: "Reset Password",
};

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-[85svh] w-full flex-col items-center justify-center p-6 lg:min-h-svh lg:p-10">
      <div className="w-full max-w-lg lg:max-w-4xl">
        <Suspense>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}

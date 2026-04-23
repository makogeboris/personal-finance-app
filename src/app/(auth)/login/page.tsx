import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-[85svh] w-full flex-col items-center justify-center p-6 lg:min-h-svh lg:p-10">
      <div className="w-full max-w-lg lg:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  );
}

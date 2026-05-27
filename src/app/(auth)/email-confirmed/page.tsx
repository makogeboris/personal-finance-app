import type { Metadata } from "next";
import EmailConfirmed from "@/components/auth/EmailConfirmed";

export const metadata: Metadata = {
  title: "Email Confirmed",
};

export default function EmailConfirmedPage() {
  return (
    <div className="flex min-h-[85svh] w-full flex-col items-center justify-center p-6 lg:min-h-svh lg:p-10">
      <div className="w-full max-w-lg lg:max-w-4xl">
        <EmailConfirmed />
      </div>
    </div>
  );
}

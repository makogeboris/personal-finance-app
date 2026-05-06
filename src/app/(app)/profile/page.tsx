import type { Metadata } from "next";
import { Name, Identity, Email } from "@/components/profile/Identity";
import DangerZone from "@/components/profile/DangerZone";
import Password from "@/components/profile/Password";
import ActiveSessions from "@/components/profile/ActiveSessions";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-primary text-32 font-bold">Profile</h1>
        <p className="text-muted-foreground text-sm">
          Manage your account details and preferences.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <Identity />
          <Name />
          <ActiveSessions />
        </div>

        <div className="flex flex-col gap-5">
          <Email />
          <Password />
          <DangerZone />
        </div>
      </div>
    </>
  );
}

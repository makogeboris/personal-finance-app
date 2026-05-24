import type { Metadata } from "next";
import { getProfile } from "@/lib/data/getProfile";
import Identity from "@/components/profile/Identity";
import Password from "@/components/profile/Password";
import ActiveSessions from "@/components/profile/ActiveSessions";
import DangerZone from "@/components/profile/DangerZone";
import DemoBanner from "@/components/profile/DemoBanner";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Account settings" };

export default async function ProfilePage() {
  const profile = await getProfile();
  if (!profile) redirect("/login");

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-primary text-32 font-bold">Account settings</h1>
        <p className="text-muted-foreground text-sm">
          Manage your account details and preferences.
        </p>
      </div>

      {profile.isDemo && <DemoBanner />}

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <Identity profile={profile} />
          <Password isDemo={profile.isDemo} />
        </div>
        <div className="flex flex-col gap-5">
          <ActiveSessions isDemo={profile.isDemo} />
          <DangerZone isDemo={profile.isDemo} />
        </div>
      </div>
    </>
  );
}

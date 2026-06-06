import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Sidebar, BottomNav } from "@/components/shared/Sidebar";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <NuqsAdapter>
      <div className="flex lg:h-svh">
        <Sidebar />

        <main className="flex-1 lg:overflow-y-scroll">
          <div className="pb-safe px-4 pt-6 sm:p-6 sm:px-10 lg:p-8 lg:pb-8!">
            {children}
          </div>
        </main>

        <BottomNav />
      </div>
    </NuqsAdapter>
  );
}

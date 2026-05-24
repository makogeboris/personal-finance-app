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
          <div className="px-4 py-6 pb-20 sm:px-10 sm:pt-10 sm:pb-24 lg:pb-8">
            {children}
          </div>
        </main>

        <BottomNav />
      </div>
    </NuqsAdapter>
  );
}

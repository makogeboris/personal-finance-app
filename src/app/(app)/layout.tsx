import { Sidebar, BottomNav } from "@/components/shared/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-svh overflow-hidden">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-6">{children}</div>
      </main>

      <BottomNav />
    </div>
  );
}

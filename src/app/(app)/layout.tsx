import { Sidebar, BottomNav } from "@/components/shared/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex lg:h-svh">
      <Sidebar />

      <main className="flex-1 lg:overflow-y-scroll">
        <div className="px-4 py-6 pb-20 sm:px-10 sm:pt-10 sm:pb-24 lg:pb-8">
          {children}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

// *! CREATE NEW BRANCH BEFORE
// *! CREATE NEW BRANCH BEFORE
// *! CREATE NEW BRANCH BEFORE
// *! CREATE NEW BRANCH BEFORE

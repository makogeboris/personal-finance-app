import Header from "@/components/auth/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-secondary block items-center md:flex">
      <Header />
      <main className="flex w-full items-center justify-center">
        {children}
      </main>
    </div>
  );
}

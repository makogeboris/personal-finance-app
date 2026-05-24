import Link from "next/link";

export default function DemoBanner() {
  return (
    <div className="bg-chart-3/30 border-chart-3 mt-6 flex flex-col gap-3 rounded-xl border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-foreground text-sm font-medium">
        You&apos;re viewing a demo account. Settings are read-only.
      </p>
      <Link
        href="/signup"
        className="bg-primary text-primary-foreground hover:bg-muted-foreground w-fit rounded-lg px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors"
      >
        Create free account
      </Link>
    </div>
  );
}

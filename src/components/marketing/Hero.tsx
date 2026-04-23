import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex items-center justify-center px-6 pt-32 pb-20 text-center">
      <div className="flex w-full max-w-3xl flex-col items-center">
        <div className="text-chart-1 mb-6 text-xs font-semibold tracking-widest uppercase">
          Personal Finance, Simplified
        </div>

        <h1 className="mb-6 text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.05] font-extrabold tracking-tight">
          Take control of your money with{" "}
          <em className="text-accent not-italic">clarity</em> and confidence
        </h1>

        <p className="text-muted-foreground mb-10 max-w-md text-base leading-7">
          Track every transaction, build budgets that stick, grow your savings
          pots, and never miss a recurring bill — all from one clean dashboard.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-5">
          <Link
            href="/signup"
            className="bg-primary focus-visible:outline-primary/90 hover:bg-chart-1 text-background transform rounded-full px-8 py-3 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Start for free
          </Link>

          <Link
            href="/demo"
            className="border-accent focus-visible:outline-primary/90 hover:border-chart-1 hover:text-chart-1 transform rounded-full border px-8 py-3 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline-2"
          >
            Try the demo
          </Link>
        </div>

        <div className="text-ring flex items-center justify-center gap-4 text-xs">
          <div className="flex gap-1">
            <span className="bg-chart-1 h-2 w-2 rounded-full"></span>
            <span className="bg-chart-2 h-2 w-2 rounded-full"></span>
            <span className="bg-chart-3 h-2 w-2 rounded-full"></span>
            <span className="bg-chart-5 h-2 w-2 rounded-full"></span>
          </div>
          No credit card required — free to get started
        </div>
      </div>
    </section>
  );
}

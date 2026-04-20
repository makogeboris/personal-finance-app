const steps = [
  {
    num: "1",
    title: "Create your account",
    desc: "Sign up for free in seconds. Or explore the demo first — no account needed.",
  },
  {
    num: "2",
    title: "Set up budgets & pots",
    desc: "Create spending budgets by category and savings pots for your goals. Takes under two minutes.",
  },
  {
    num: "3",
    title: "Track everything in one place",
    desc: "Add transactions, monitor recurring bills, and watch your dashboard update in real time.",
  },
];

const bills = [
  {
    name: "Netflix",
    status: "Paid",
    statusClass: "bg-chart-1/10 text-chart-1",
  },
  {
    name: "Spotify",
    status: "Paid",
    statusClass: "bg-chart-1/10 text-chart-1",
  },
  { name: "Gym", status: "Due", statusClass: "bg-red/10 text-red" },
  {
    name: "iCloud",
    status: "Soon",
    statusClass: "bg-secondary text-accent",
  },
];

export default function Steps() {
  return (
    <section id="how" className="bg-secondary px-6 py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Steps */}
        <div>
          <p className="text-chart-1 mb-3 text-xs font-semibold tracking-widest uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl leading-tight font-extrabold tracking-tight lg:text-5xl">
            Get started in <span className="text-accent">minutes</span>
          </h2>
          <div className="flex flex-col gap-4">
            {steps.map((s) => (
              <div
                key={s.num}
                className="group hover:bg-card flex cursor-default items-start gap-5 rounded-2xl p-5 transition-colors duration-200"
              >
                <div className="bg-primary text-primary-foreground group-hover:bg-chart-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-200">
                  {s.num}
                </div>
                <div>
                  <p className="text-foreground mb-1 font-bold tracking-tight">
                    {s.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary row-span-2 flex flex-col justify-between gap-6 rounded-2xl p-5">
            <div>
              <p className="text-accent mb-2 text-[10px] font-semibold tracking-widest uppercase">
                Holiday Fund
              </p>
              <p className="text-chart-2 text-2xl font-extrabold tracking-tight">
                $1,200
              </p>
              <div className="mt-3">
                <div className="bg-primary-foreground/10 mb-1 h-1.5 overflow-hidden rounded-full">
                  <div
                    className="bg-chart-1 h-full rounded-full"
                    style={{ width: "60%" }}
                  />
                </div>
                <p className="text-accent text-[10px]">60% of $2,000 goal</p>
              </div>
            </div>
            <div>
              <p className="text-accent mb-2 text-[10px] font-semibold tracking-widest uppercase">
                New Laptop
              </p>
              <p className="text-chart-3 text-xl font-extrabold tracking-tight">
                $340
              </p>
              <div className="mt-3">
                <div className="bg-primary-foreground/10 mb-1 h-1.5 overflow-hidden rounded-full">
                  <div
                    className="bg-chart-3 h-full rounded-full"
                    style={{ width: "34%" }}
                  />
                </div>
                <p className="text-accent text-[10px]">34% of $1,000 goal</p>
              </div>
            </div>
          </div>

          {/* Balance */}
          <div className="bg-card rounded-2xl p-5">
            <p className="text-ring mb-1 text-[10px] font-semibold tracking-widest uppercase">
              Net Balance
            </p>
            <p className="text-foreground text-2xl font-extrabold tracking-tight">
              $4,836
            </p>
          </div>

          {/* Bills */}
          <div className="bg-card rounded-2xl p-5">
            <p className="text-ring mb-3 text-[10px] font-semibold tracking-widest uppercase">
              Recurring Bills
            </p>
            <div className="flex flex-col gap-2">
              {bills.map((bill) => (
                <div
                  key={bill.name}
                  className="flex items-center justify-between"
                >
                  <span className="text-foreground text-xs font-medium">
                    {bill.name}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${bill.statusClass}`}
                  >
                    {bill.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

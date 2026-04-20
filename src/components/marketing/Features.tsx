import Image from "next/image";

const features = [
  {
    icon: "/icons/icon-nav-overview.svg",
    iconBg: "bg-chart-1/10",
    title: "Overview Dashboard",
    desc: "Your entire financial picture at a glance — balance, income, expenses, budgets, and pots on one page.",
    dark: false,
  },
  {
    icon: "/icons/icon-nav-transactions.svg",
    iconBg: "bg-chart-1/10",
    title: "Transaction Tracking",
    desc: "Every transaction in one place. Search, sort, and filter by date, category, or amount with smooth pagination.",
    dark: false,
  },
  {
    icon: "/icons/icon-nav-budgets.svg",
    iconBg: "bg-background/10",
    title: "Smart Budgets",
    desc: "Create budgets per category, watch spending progress in real time, and see the latest three transactions per budget.",
    dark: true,
  },
  {
    icon: "/icons/icon-nav-pots.svg",
    iconBg: "bg-purple/10",
    title: "Savings Pots",
    desc: "Set savings goals, track progress visually, and add or withdraw from pots anytime.",
    dark: false,
  },
  {
    icon: "/icons/icon-nav-recurring-bills.svg",
    iconBg: "bg-yellow/30",
    title: "Recurring Bills",
    desc: "See every subscription and regular payment. Know exactly which are paid, due, or upcoming this month.",
    dark: false,
  },
  {
    icon: "/icons/icon-shield-plus.svg",
    iconBg: "bg-red/10",
    title: "Secure by Default",
    desc: "Row-level security ensures your data is always yours. Manage your account anytime from your profile page.",
    dark: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-background px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-chart-1 mb-3 text-xs font-semibold tracking-widest uppercase">
            Everything you need
          </p>
          <h2 className="text-4xl leading-tight font-extrabold tracking-tight lg:text-5xl">
            Built for how you <span className="text-accent">actually</span>{" "}
            spend
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group relative overflow-hidden rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${f.dark ? "bg-primary" : "bg-secondary"}`}
            >
              <div className="bg-chart-1 absolute right-0 bottom-0 left-0 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />

              <div
                className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-xl ${f.iconBg}`}
              >
                <Image
                  width={20}
                  height={20}
                  src={f.icon}
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
              </div>
              <h3
                className={`mb-2 text-base font-bold tracking-tight ${
                  f.dark ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {f.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  f.dark ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { number: "5", suffix: "+", label: "Pages of financial insight" },
  { number: "", suffix: "∞", label: "Transactions tracked" },
  { number: "100", suffix: "%", label: "Free to get started" },
  { number: "0", suffix: "$", label: "No hidden fees" },
];

export default function Stats() {
  return (
    <section className="bg-primary px-6 py-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-primary-foreground text-4xl font-extrabold tracking-tight">
              {s.number}
              <span className="text-chart-1">{s.suffix}</span>
            </p>
            <p className="text-accent mt-1 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { Logo } from "../shared/Logo";

export default function Footer() {
  return (
    <footer>
      {/* CTA */}
      <section className="bg-primary flex flex-col items-center justify-between gap-10 px-6 py-20 text-center md:flex-row md:text-left lg:px-16">
        <div>
          <h2 className="text-background text-3xl leading-tight font-extrabold md:text-4xl">
            Ready to take <em className="text-chart-1 not-italic">control</em>
            <br /> of your finances?
          </h2>
          <p className="text-accent mt-4">
            Join for free. No credit card. No stress.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Link
            href="/signup"
            className="text-foreground hover:bg-secondary bg-background rounded-full px-8 py-3 text-sm font-semibold transition"
          >
            Create free account
          </Link>

          <Link
            href="/demo"
            className="bg-chart-1 text-background rounded-full px-8 py-3 text-sm font-semibold transition hover:opacity-90"
          >
            Explore the demo
          </Link>

          <span className="text-ring text-xs">
            Free forever for personal use
          </span>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-foreground border-primary-foreground/5 flex flex-col items-center justify-between gap-6 border-t px-6 py-8 text-center md:flex-row lg:px-16">
        <Link
          href="/"
          className="flex items-center text-xl font-extrabold tracking-tight"
        >
          <Logo />
        </Link>

        <ul className="flex list-none flex-wrap justify-center gap-6">
          <li>
            <a
              href="#features"
              className="text-accent hover:text-primary-foreground focus-visible:outline-secondary rounded-xs text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#how"
              className="text-accent hover:text-primary-foreground focus-visible:outline-secondary rounded-xs text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              How it works
            </a>
          </li>

          <li>
            <Link
              href="/signup"
              className="text-accent hover:text-primary-foreground focus-visible:outline-secondary rounded-xs text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Sign up
            </Link>
          </li>
        </ul>

        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} finance. All rights reserved.
        </p>
      </section>
    </footer>
  );
}

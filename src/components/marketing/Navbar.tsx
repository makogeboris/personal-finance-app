"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { LogoDark } from "../shared/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header>
      <nav
        className={clsx(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          {
            "bg-secondary/90 border-ring border-b backdrop-blur-md": scrolled,
            "bg-transparent": !scrolled,
          },
        )}
      >
        <div className="mx-auto flex items-center justify-between px-6 py-4 lg:px-16">
          {/* Logo */}
          <Link
            href="/"
            className="focus-visible:outline-primary/90 flex items-center rounded-xs text-xl font-extrabold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <LogoDark />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden list-none items-center gap-10 md:flex">
            <li>
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground focus-visible:outline-primary/90 rounded-xs text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how"
                className="text-muted-foreground hover:text-foreground focus-visible:outline-primary/90 rounded-xs text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                How it works
              </a>
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/login"
              className="text-foreground hover:text-chart-1 focus-visible:outline-primary/90 rounded-xs text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-primary-foreground bg-primary hover:bg-chart-1 focus-visible:outline-primary/90 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Get started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 p-1 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={clsx(
                "bg-foreground block h-0.5 w-6 transition-all duration-300",
                {
                  "translate-y-2 rotate-45": menuOpen,
                  "": !menuOpen,
                },
              )}
            />
            <span
              className={clsx(
                "bg-foreground block h-0.5 w-6 transition-all duration-300",
                {
                  "opacity-0": menuOpen,
                  "": !menuOpen,
                },
              )}
            />
            <span
              className={clsx(
                "bg-foreground block h-0.5 w-6 transition-all duration-300",
                {
                  "-translate-y-2 -rotate-45": menuOpen,
                  "": !menuOpen,
                },
              )}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`bg-muted border-border overflow-hidden border-t transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4 px-6 py-6">
            <a
              href="#features"
              className="text-muted-foreground text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how"
              className="text-muted-foreground text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              How it works
            </a>
            <div className="border-border flex flex-col items-center gap-3 border-t pt-2">
              <Link
                href="/login"
                className="text-foreground text-sm font-semibold"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="text-primary-foreground bg-primary w-fit rounded-full px-5 py-2.5 text-center text-sm font-semibold"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

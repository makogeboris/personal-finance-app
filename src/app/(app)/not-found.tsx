"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AppNotFound() {
  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="flex max-w-sm flex-col items-center gap-8">
        <div className="bg-muted rounded-full p-6">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            className="text-muted-foreground"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="17"
              r="0.5"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">
            404
          </p>
          <h1 className="text-foreground text-2xl font-extrabold tracking-tight sm:text-3xl">
            We can&apos;t find that page
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            This page doesn&apos;t exist or may have been removed. Try going
            back to the overview or use the sidebar to navigate.
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/overview"
            className="bg-primary text-primary-foreground hover:bg-chart-1 w-full rounded-xl px-6 py-3 text-center text-sm font-bold transition-colors duration-200 sm:w-auto"
          >
            Go to Overview
          </Link>
          <button
            onClick={() => router.back()}
            className="bg-muted text-foreground hover:bg-border w-full cursor-pointer rounded-xl px-6 py-3 text-sm font-bold transition-colors duration-200 sm:w-auto"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

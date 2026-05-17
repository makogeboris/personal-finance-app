"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
            className="text-destructive"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 8v4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="16"
              r="0.5"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-destructive text-sm font-semibold tracking-widest uppercase">
            Something went wrong
          </p>
          <h1 className="text-foreground text-2xl font-extrabold tracking-tight sm:text-3xl">
            An error occurred
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Something went wrong loading this page. Try again or go back to the
            overview.
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={reset}
            className="bg-primary text-primary-foreground hover:bg-chart-1 w-full cursor-pointer rounded-xl px-6 py-3 text-sm font-bold transition-colors duration-200 sm:w-auto"
          >
            Try again
          </button>
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

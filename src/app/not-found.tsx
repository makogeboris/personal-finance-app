import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-secondary flex min-h-screen items-center justify-center px-6">
      <div className="flex max-w-md flex-col items-center gap-8 text-center">
        <p className="text-chart-1/10 text-[120px] leading-none font-extrabold tracking-tighter sm:text-[160px]">
          404
        </p>

        <div className="flex flex-col gap-3">
          <h1 className="text-foreground text-2xl font-extrabold tracking-tight sm:text-3xl">
            Page not found
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Double-check the URL or head back home.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/"
            className="bg-primary text-primary-foreground hover:bg-chart-1 rounded-full px-8 py-3 text-center text-sm font-bold transition-colors duration-200"
          >
            Back to home
          </Link>
          <Link
            href="/login"
            className="border-border text-foreground hover:border-foreground rounded-full border px-8 py-3 text-center text-sm font-bold transition-colors duration-200"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

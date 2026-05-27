import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function EmailConfirmed() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="p-0">
        <CardContent className="p-0">
          <div className="flex flex-col items-center justify-center gap-6 p-6 text-center lg:p-8">
            <div className="bg-chart-1/10 flex h-16 w-16 items-center justify-center rounded-full">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-chart-1"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-foreground text-2xl font-bold">
                Email confirmed
              </h1>
              <p className="text-muted-foreground text-sm text-balance">
                Your email address has been successfully updated. You can now
                use your new email to sign in.
              </p>
            </div>

            <Link
              href="/profile"
              className="bg-primary text-primary-foreground hover:bg-chart-1 rounded-lg px-6 py-3 text-sm font-bold transition-colors"
            >
              Back to profile
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

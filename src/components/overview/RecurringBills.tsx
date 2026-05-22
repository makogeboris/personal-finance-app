import Link from "next/link";
import { NavIcons } from "../shared/NavIcons";
import type { RecurringBillsSummaryData } from "@/lib/data/getRecurringBills";
import Image from "next/image";

export default function RecurringBills({
  bills,
}: {
  bills: RecurringBillsSummaryData;
}) {
  return (
    <div className="area-bills bg-background rounded-12 grid grid-cols-1 gap-8 px-5 py-6 sm:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-primary text-xl font-bold">Recurring Bills</h2>
        <Link
          className="group hover:text-primary text-muted-foreground focus-visible:outline-primary flex items-center gap-3 rounded-xs text-sm capitalize transition-colors focus-visible:outline-1"
          href="/recurring-bills"
        >
          See details
          {NavIcons.chevronRight}
        </Link>
      </div>

      {bills.totalBills === 0 ? (
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-sidebar-accent grid size-14 place-items-center rounded-full">
            <Image
              width={24}
              height={24}
              src="/icons/icon-nav-recurring-bills.svg"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-primary text-base font-bold">
              No recurring bills
            </h3>
            <p className="text-muted-foreground text-sm">
              Add recurring bills to stay on top of upcoming payments and
              subscriptions.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="bg-secondary border-l-chart-1 flex items-center justify-between rounded-md border-l-4 px-4 py-5">
            <span className="text-muted-foreground text-sm">Paid Bills</span>
            <span className="text-primary text-sm font-bold">
              ${bills.paidTotal.toFixed(2)}
            </span>
          </div>
          <div className="bg-secondary border-l-chart-3 flex items-center justify-between rounded-md border-l-4 px-4 py-5">
            <span className="text-muted-foreground text-sm">
              Total Upcoming
            </span>
            <span className="text-primary text-sm font-bold">
              ${bills.upcomingTotal.toFixed(2)}
            </span>
          </div>
          <div className="bg-secondary border-l-chart-2 flex items-center justify-between rounded-md border-l-4 px-4 py-5">
            <span className="text-muted-foreground text-sm">Due Soon</span>
            <span className="text-primary text-sm font-bold">
              ${bills.dueSoonTotal.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

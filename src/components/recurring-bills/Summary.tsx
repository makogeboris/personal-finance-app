import Image from "next/image";
import { FieldSeparator } from "../ui/field";
import type { RecurringBillsSummaryData } from "@/lib/data/getRecurringBills";

function fmt(n: number) {
  return `$${n.toFixed(2)}`;
}

export function RecurringBillsSummary({
  summary,
}: {
  summary: RecurringBillsSummaryData;
}) {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-6 lg:max-w-84 lg:flex-col">
      <div className="bg-foreground rounded-12 flex w-full gap-5 p-6 sm:flex-col sm:gap-8">
        <Image
          className="h-8 w-8"
          width={31}
          height={31}
          alt=""
          src="/icons/icon-recurring-bills.svg"
        />

        <div className="flex flex-col gap-1">
          <p className="text-background text-sm">Total Bills</p>
          <span className="text-background text-32 font-bold">
            {fmt(summary.totalBills)}
          </span>
        </div>
      </div>

      <div className="rounded-12 bg-background flex w-full flex-col gap-5 p-5">
        <h2 className="text-primary text-base font-bold">Summary</h2>

        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-xs">Paid Bills</span>
            <span className="text-primary text-xs font-bold">
              {summary.paidCount} ({fmt(summary.paidTotal)})
            </span>
          </div>

          <FieldSeparator className="my-1" />

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-xs">
              Total Upcoming
            </span>
            <span className="text-primary text-xs font-bold">
              {summary.upcomingCount} ({fmt(summary.upcomingTotal)})
            </span>
          </div>

          <FieldSeparator className="my-1" />

          <div className="flex items-center justify-between">
            <span className="text-destructive text-xs">Due Soon</span>
            <span className="text-destructive text-xs font-bold">
              {summary.dueSoonCount} ({fmt(summary.dueSoonTotal)})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

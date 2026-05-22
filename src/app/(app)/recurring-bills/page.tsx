import type { Metadata } from "next";
import { Suspense } from "react";
import { getRecurringBills } from "@/lib/data/getRecurringBills";
import { RecurringBillsSummary } from "@/components/recurring-bills/Summary";
import { RecurringBillsSkeleton } from "@/components/Skeletons/RecurringBillsSkeletons";
import RecurringBillsClient from "@/components/recurring-bills/RecurringBillsClient";

export const metadata: Metadata = { title: "Recurring Bills" };

export default function RecurringBillsPage() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-primary text-32 font-bold">Recurring Bills</h1>
        <p className="text-muted-foreground text-sm">
          Monitor your regular payments and due dates.
        </p>
      </div>

      <Suspense fallback={<RecurringBillsSkeleton />}>
        <RecurringBillsData />
      </Suspense>
    </>
  );
}

async function RecurringBillsData() {
  const { bills, summary } = await getRecurringBills();

  return (
    <div className="mt-8 flex w-full flex-col gap-6 lg:flex-row">
      <RecurringBillsSummary summary={summary} />
      <RecurringBillsClient bills={bills} />
    </div>
  );
}

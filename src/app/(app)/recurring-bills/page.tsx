import type { Metadata } from "next";
import { RecurringBillsSummary } from "@/components/recurring-bills/Summary";
import { RecurringBillsTable } from "@/components/recurring-bills/Table";

export const metadata: Metadata = {
  title: "Recurring Bills",
};

export default function RecurringBills() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-primary text-32 font-bold">Recurring Bills</h1>
        <p className="text-muted-foreground text-sm">
          Monitor your regular payments and due dates.
        </p>
      </div>

      <div className="mt-8 flex w-full flex-col gap-6 lg:flex-row">
        <RecurringBillsSummary />
        <RecurringBillsTable />
      </div>
    </>
  );
}

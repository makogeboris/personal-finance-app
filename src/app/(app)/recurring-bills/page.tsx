import Summary from "@/components/recurring-bills/Summary";
import { RecurringBillsTable } from "@/components/recurring-bills/Table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recurring Bills",
};

export default function RecurringBills() {
  return (
    <>
      <h1 className="text-primary text-32 font-bold">Recurring Bills</h1>

      <div className="mt-8 flex w-full flex-col gap-6 lg:flex-row">
        <Summary />
        <RecurringBillsTable />
      </div>
    </>
  );
}

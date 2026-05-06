import type { Metadata } from "next";
import Summary from "@/components/overview/Summary";
import Pots from "@/components/overview/Pots";
import Budgets from "@/components/overview/Budgets";
import Transactions from "@/components/overview/Transactions";
import RecurringBills from "@/components/overview/RecurringBills";

export const metadata: Metadata = {
  title: "Overview",
};

export default function Overview() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-primary text-32 font-bold">Overview</h1>
        <p className="text-muted-foreground text-sm">
          Your financial snapshot at a glance.
        </p>
      </div>

      <div className="grid-layout">
        <Summary />
        <Pots />
        <Budgets />
        <Transactions />
        <RecurringBills />
      </div>
    </>
  );
}

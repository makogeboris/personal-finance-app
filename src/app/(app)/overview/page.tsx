import type { Metadata } from "next";
import { Suspense } from "react";
import { getOverview } from "@/lib/data/getOverview";
import Summary from "@/components/overview/Summary";
import Pots from "@/components/overview/Pots";
import Budgets from "@/components/overview/Budgets";
import Transactions from "@/components/overview/Transactions";
import RecurringBills from "@/components/overview/RecurringBills";
import { OverviewSkeleton } from "@/components/Skeletons/OverviewSkeletons";

export const metadata: Metadata = { title: "Overview" };

export default function OverviewPage() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-primary text-32 font-bold">Overview</h1>
        <p className="text-muted-foreground text-sm">
          Your financial snapshot at a glance.
        </p>
      </div>

      <Suspense fallback={<OverviewSkeleton />}>
        <OverviewData />
      </Suspense>
    </>
  );
}

async function OverviewData() {
  const data = await getOverview();

  return (
    <div className="grid-layout">
      <Summary
        balance={data.balance}
        income={data.income}
        expenses={data.expenses}
      />
      <Pots totalSaved={data.totalSaved} pots={data.pots} />
      <Budgets
        budgets={data.budgets}
        totalSpent={data.totalSpent}
        totalLimit={data.totalLimit}
      />
      <Transactions transactions={data.transactions} />
      <RecurringBills bills={data.bills} />
    </div>
  );
}

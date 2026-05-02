import Budget from "@/components/budgets/Budget";
import { ChartPieDonutText } from "@/components/budgets/Chart";
import SpendingSummary from "@/components/budgets/SpendingSummary";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budgets",
};

export default function Budgets() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-primary text-32 font-bold">Budgets</h1>

        <Button>+ Add New Budget</Button>
      </div>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row">
        <div className="bg-background rounded-12 flex h-fit w-full flex-col items-center p-5 sm:flex-row lg:max-w-107 lg:flex-col">
          <ChartPieDonutText />
          <SpendingSummary />
        </div>

        <div className="flex w-full flex-col gap-6">
          <Budget />
          <Budget />
          <Budget />
          <Budget />
        </div>
      </div>
    </>
  );
}

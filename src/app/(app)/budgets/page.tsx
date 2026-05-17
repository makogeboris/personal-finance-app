import type { Metadata } from "next";
import { Suspense } from "react";
import { getBudgets } from "@/lib/data/getBudgets";
import Budget from "@/components/budgets/Budget";
import { ChartPieDonutText } from "@/components/budgets/Chart";
import SpendingSummary from "@/components/budgets/SpendingSummary";
import { AddNewBudget } from "@/components/budgets/AddNewBudget";
import { BudgetPageSkeleton } from "@/components/Skeletons/BudgetSkeletons";
import { COLOR_MAP_REVERSE } from "@/lib/constants/categories";
import Image from "next/image";

export const metadata: Metadata = { title: "Budgets" };

export default function BudgetsPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-primary text-32 font-bold">Budgets</h1>
          <p className="text-muted-foreground xs:block hidden text-sm">
            Set limits and stay on top of your spending.
          </p>
        </div>

        <Suspense fallback={null}>
          <AddNewBudgetServer />
        </Suspense>
      </div>

      <Suspense fallback={<BudgetPageSkeleton />}>
        <BudgetsData />
      </Suspense>
    </>
  );
}

async function AddNewBudgetServer() {
  const budgets = await getBudgets();
  const usedCategories = budgets.map((b) => b.category);
  const usedColors = budgets
    .map((b) => COLOR_MAP_REVERSE[b.theme] ?? "")
    .filter(Boolean);

  return (
    <AddNewBudget usedCategories={usedCategories} usedColors={usedColors} />
  );
}

async function BudgetsData() {
  const budgets = await getBudgets();

  if (budgets.length === 0) {
    return (
      <div className="bg-background rounded-12 mt-8 flex flex-col items-center gap-4 p-4 py-14 text-center">
        <div className="bg-sidebar-accent grid size-14 place-items-center rounded-full">
          <Image
            width={24}
            height={24}
            src="/icons/icon-nav-budgets.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-primary text-base font-bold">
            No budgets created
          </h3>
          <p className="text-muted-foreground text-sm">
            Set a budget to keep track of your spending and stay in control of
            your finances.
          </p>
        </div>
      </div>
    );
  }

  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const totalLimit = budgets.reduce((sum, b) => sum + b.maximum, 0);

  return (
    <div className="mt-8 flex flex-col gap-6 lg:flex-row">
      <div className="bg-background rounded-12 flex h-fit w-full flex-col items-center p-5 sm:flex-row lg:max-w-107 lg:flex-col">
        <ChartPieDonutText
          budgets={budgets}
          totalSpent={totalSpent}
          totalLimit={totalLimit}
        />
        <SpendingSummary budgets={budgets} />
      </div>

      <div className="flex w-full flex-col gap-6">
        {budgets.map((budget) => (
          <Budget key={budget.id} budget={budget} />
        ))}
      </div>
    </div>
  );
}

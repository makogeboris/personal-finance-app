import type { Metadata } from "next";
import Image from "next/image";
import Budget from "@/components/budgets/Budget";
import SpendingSummary from "@/components/budgets/SpendingSummary";
import { ChartPieDonutText } from "@/components/budgets/Chart";
import { AddNewBudget } from "@/components/budgets/AddNewBudget";

export const metadata: Metadata = {
  title: "Budgets",
};

type BudgetType = {
  id: string;
  name: string;
  maximum: number;
  spent: number;
  remaining: number;
  theme: string;
};

const budgets: BudgetType[] = [
  {
    id: "1",
    name: "Entertainment",
    maximum: 159,
    spent: 23,
    remaining: 45,
    theme: "var(--color-green)",
  },
  {
    id: "2",
    name: "Bills",
    maximum: 150,
    spent: 23,
    remaining: 45,
    theme: "var(--color-navy)",
  },
  {
    id: "3",
    name: "Dining Out",
    maximum: 40,
    spent: 23,
    remaining: 45,
    theme: "var(--color-cyan)",
  },
  {
    id: "4",
    name: "Personal Care",
    maximum: 10,
    spent: 23,
    remaining: 45,
    theme: "var(--color-yellow)",
  },
];

export default function Budgets() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-primary text-32 font-bold">Budgets</h1>
          <p className="text-muted-foreground xs:block hidden text-sm">
            Set limits and stay on top of your spending.
          </p>
        </div>

        <AddNewBudget />
      </div>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row">
        <div className="bg-background rounded-12 flex h-fit w-full flex-col items-center p-5 sm:flex-row lg:max-w-107 lg:flex-col">
          <ChartPieDonutText />
          <SpendingSummary />
        </div>

        <div className="flex w-full flex-col gap-6">
          {budgets.map((budget) => (
            <Budget key={budget.id} {...budget} />
          ))}
        </div>
      </div>

      {/* <div className="bg-background rounded-12 mt-8 flex flex-col items-center gap-4 p-4 py-14 text-center">
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
      </div> */}
    </>
  );
}

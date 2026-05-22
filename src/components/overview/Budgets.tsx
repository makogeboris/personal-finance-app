import Link from "next/link";
import { ChartPieDonutText } from "../budgets/Chart";
import ChartSummary from "../budgets/ChartSummary";
import { NavIcons } from "../shared/NavIcons";
import type { BudgetWithData } from "@/types";
import Image from "next/image";

type BudgetSummary = {
  id: string;
  category: string;
  maximum: number;
  spent: number;
  theme: string;
};

export default function Budgets({
  budgets,
  totalSpent,
  totalLimit,
}: {
  budgets: BudgetSummary[];
  totalSpent: number;
  totalLimit: number;
}) {
  const budgetsForChart = budgets.map((b) => ({
    ...b,
    user_id: "",
    remaining: b.maximum - b.spent,
    latestTransactions: [],
  })) as BudgetWithData[];

  return (
    <div className="area-budgets bg-background rounded-12 grid grid-cols-1 px-5 py-6 sm:p-8">
      <div className="flex h-fit items-center justify-between">
        <h2 className="text-primary text-xl font-bold">Budgets</h2>
        <Link
          className="group hover:text-primary text-muted-foreground focus-visible:outline-primary flex cursor-pointer items-center gap-3 rounded-xs text-sm capitalize transition-colors focus-visible:outline-1"
          href="/budgets"
        >
          See details
          {NavIcons.chevronRight}
        </Link>
      </div>

      {budgets.length === 0 ? (
        <div className="mt-5 flex flex-col items-center gap-4 text-center lg:mt-0">
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
      ) : (
        <div className="@container">
          <div className="flex flex-col items-center gap-0 p-0 @lg:flex-row">
            <ChartPieDonutText
              budgets={budgetsForChart}
              totalSpent={totalSpent}
              totalLimit={totalLimit}
            />
            <ChartSummary budgets={budgetsForChart} />
          </div>
        </div>
      )}
    </div>
  );
}

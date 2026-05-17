import { FieldSeparator } from "../ui/field";
import type { BudgetWithData } from "@/types";

export default function SpendingSummary({
  budgets,
}: {
  budgets: BudgetWithData[];
}) {
  return (
    <div className="flex w-full flex-col gap-6">
      <h2 className="text-primary text-xl font-bold">Spending Summary</h2>

      <div className="grid w-full grid-cols-1 gap-4">
        {budgets.map((budget, i) => (
          <div key={budget.id}>
            <div className="flex items-center gap-4">
              <div className="h-5 w-1" style={{ background: budget.theme }} />
              <div className="flex w-full items-center justify-between gap-2">
                <p className="text-muted-foreground text-sm">
                  {budget.category}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-primary text-base font-bold">
                    ${budget.spent.toFixed(2)}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    of ${budget.maximum.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            {i < budgets.length - 1 && <FieldSeparator className="mt-1" />}
          </div>
        ))}
      </div>
    </div>
  );
}

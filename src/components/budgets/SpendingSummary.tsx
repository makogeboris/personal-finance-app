import { FieldSeparator } from "../ui/field";

export default function SpendingSummary() {
  return (
    <div className="flex w-full flex-col gap-6">
      <h2 className="text-primary text-xl font-bold">Spending Summary</h2>

      <div className="grid w-full grid-cols-1 gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-chart-1 h-full w-1"></div>

          <div className="flex w-full items-center justify-between gap-2">
            <p className="text-muted-foreground text-sm">Bills</p>

            <div className="flex items-center gap-1">
              <div className="flex items-center gap-2">
                <span className="text-primary text-base font-bold">$50.00</span>
                <span className="text-muted-foreground text-xs">
                  of $750.00
                </span>
              </div>
            </div>
          </div>
        </div>

        <FieldSeparator />

        <div className="flex items-center gap-4">
          <div className="bg-chart-2 h-full w-1"></div>

          <div className="flex w-full items-center justify-between gap-2">
            <p className="text-muted-foreground text-sm">Dining Out</p>

            <div className="flex items-center gap-1">
              <div className="flex items-center gap-2">
                <span className="text-primary text-base font-bold">$50.00</span>
                <span className="text-muted-foreground text-xs">
                  of $750.00
                </span>
              </div>
            </div>
          </div>
        </div>

        <FieldSeparator />

        <div className="flex items-center gap-4">
          <div className="bg-chart-3 h-full w-1"></div>

          <div className="flex w-full items-center justify-between gap-2">
            <p className="text-muted-foreground text-sm">Personal Care</p>

            <div className="flex items-center gap-1">
              <div className="flex items-center gap-2">
                <span className="text-primary text-base font-bold">$50.00</span>
                <span className="text-muted-foreground text-xs">
                  of $750.00
                </span>
              </div>
            </div>
          </div>
        </div>

        <FieldSeparator />

        <div className="flex items-center gap-4">
          <div className="bg-chart-4 h-full w-1"></div>

          <div className="flex w-full items-center justify-between gap-2">
            <p className="text-muted-foreground text-sm">Entertainment</p>

            <div className="flex items-center gap-1">
              <div className="flex items-center gap-2">
                <span className="text-primary text-base font-bold">$50.00</span>
                <span className="text-muted-foreground text-xs">
                  of $750.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

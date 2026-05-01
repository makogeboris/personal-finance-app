export default function ChartSummary() {
  return (
    <div className="@container flex w-full flex-1 items-center">
      <div className="grid w-full grid-cols-2 gap-4">
        <div className="flex gap-4">
          <div className="bg-chart-1 w-1"></div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-muted-foreground text-xs">Entertainment</span>
            <span className="text-primary text-sm font-bold">$50.00</span>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-chart-2 w-1"></div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-muted-foreground text-xs">Bills</span>
            <span className="text-primary text-sm font-bold">$750.00</span>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-chart-3 w-1"></div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-muted-foreground text-xs">Dining Out</span>
            <span className="text-primary text-sm font-bold">$75.00</span>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-chart-4 w-1"></div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-muted-foreground text-xs">Personal Care</span>
            <span className="text-primary text-sm font-bold">$100.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

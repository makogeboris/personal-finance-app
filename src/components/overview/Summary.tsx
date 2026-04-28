export default function Summary() {
  return (
    <div className="area-stats grid grid-cols-1 gap-3 pt-8 pb-2 md:grid-cols-3 md:gap-6">
      <div className="bg-foreground rounded-12 flex w-full flex-col items-start gap-2 p-5 sm:p-6">
        <h2 className="text-primary-foreground text-sm">Current Balance</h2>
        <p className="text-primary-foreground text-32 leading-[1.2] font-bold">
          $4,836.00
        </p>
      </div>
      <div className="bg-background rounded-12 flex w-full flex-col items-start gap-2 p-5 sm:p-6">
        <h2 className="text-muted-foreground text-sm">Income</h2>
        <p className="text-primary text-32 leading-[1.2] font-bold">
          $3,814.25
        </p>
      </div>
      <div className="bg-background rounded-12 flex w-full flex-col items-start gap-2 p-5 sm:p-6">
        <h2 className="text-muted-foreground text-sm">Expenses</h2>
        <p className="text-primary text-32 leading-[1.2] font-bold">
          $1,700.50
        </p>
      </div>
    </div>
  );
}

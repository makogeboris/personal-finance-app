import { Skeleton } from "@/components/ui/skeleton";

export function BudgetPageSkeleton() {
  return (
    <div className="mt-8 flex flex-col gap-6 lg:flex-row">
      <div className="bg-background rounded-12 flex h-fit w-full flex-col items-center p-5 sm:flex-row lg:max-w-107 lg:flex-col">
        <ChartPieDonutTextSkeleton />
        <SpendingSummarySkeleton />
      </div>

      <div className="flex w-full flex-col gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <BudgetSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

function SpendingSummarySkeleton() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Skeleton className="h-6 w-44" />
      <div className="grid w-full grid-cols-1 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-1 shrink-0" />
              <div className="flex w-full items-center justify-between gap-2">
                <Skeleton className="h-4 w-24" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-14" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            </div>
            {i < 3 && <Skeleton className="h-px w-full" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function ChartPieDonutTextSkeleton() {
  return (
    <div className="flex-none p-0">
      <div className="relative flex aspect-square h-65 w-65 items-center justify-center">
        <Skeleton className="h-50 w-50 rounded-full" />
        <div className="absolute flex flex-col items-center gap-1">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>
    </div>
  );
}

export function BudgetSkeleton() {
  return (
    <div className="bg-background rounded-12 flex w-full flex-col gap-5 px-5 py-6 sm:p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Skeleton className="size-4 rounded-full" />
          <Skeleton className="h-6 w-32" />
        </div>
        <Skeleton className="h-5 w-5 rounded-full" />
      </div>

      <div className="flex w-full flex-col gap-4">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-8 w-full rounded-full" />
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center gap-4 border-l-4 pl-4">
            <div className="flex flex-col items-start gap-1">
              <Skeleton className="h-3 w-10" />
              <Skeleton className="h-4 w-14" />
            </div>
          </div>
          <div className="flex w-full items-center gap-4 border-l-4 pl-4">
            <div className="flex flex-col items-start gap-1">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-4 w-14" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary rounded-12 sm-p-5 flex flex-col gap-5 p-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-20" />
        </div>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Skeleton className="hidden h-8 w-8 rounded-full sm:block" />
                <Skeleton className="h-3 w-32" />
              </div>
              <div className="flex flex-col items-end gap-1">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
            {i < 2 && <Skeleton className="h-px w-full" />}
          </div>
        ))}
      </div>
    </div>
  );
}

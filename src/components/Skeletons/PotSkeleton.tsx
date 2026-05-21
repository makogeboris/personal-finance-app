import { Skeleton } from "@/components/ui/skeleton";

export default function PotSkeleton() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <Pot key={i} />
      ))}
    </div>
  );
}

function Pot() {
  return (
    <div className="bg-background rounded-12 flex w-full flex-col gap-8 px-5 pt-6 pb-9.5 lg:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Skeleton className="size-4 rounded-full" />
          <Skeleton className="h-6 w-32" />
        </div>
        <Skeleton className="size-5 rounded-full" />
      </div>

      <div className="@container">
        <div className="flex justify-between gap-6 @lg:gap-12.5 @lg:pl-8">
          <Skeleton className="h-29 w-16 shrink-0 rounded-md" />

          <div className="w-full">
            <div className="mb-6 flex items-center justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-8 w-24" />
            </div>

            <Skeleton className="h-3 w-full rounded-full" />

            <div className="mt-3 flex items-center justify-between">
              <Skeleton className="h-3 w-10" />
              <Skeleton className="h-3 w-28" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Skeleton className="h-13.5 w-full" />
        <Skeleton className="h-13.5 w-full" />
      </div>
    </div>
  );
}

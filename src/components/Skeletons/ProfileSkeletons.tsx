import { Skeleton } from "@/components/ui/skeleton";

export function IdentitySkeleton() {
  return (
    <div className="bg-background rounded-12 flex h-fit flex-col items-center gap-4 p-6 text-center sm:flex-row sm:gap-5 sm:p-8 sm:text-left lg:flex-col lg:items-center lg:text-center xl:flex-row xl:items-start xl:text-left">
      <Skeleton className="size-16 shrink-0 rounded-full" />
      <div className="flex flex-col items-center gap-1">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-40" />
        <Skeleton className="mt-2 h-5 w-16 rounded-full" />
        <Skeleton className="mt-1 h-3 w-44" />
      </div>
    </div>
  );
}

export function NameSkeleton() {
  return (
    <div className="bg-background rounded-12 flex h-fit flex-col gap-5 p-6 sm:p-8">
      <div>
        <Skeleton className="h-6 w-28" />
        <Skeleton className="mt-0.5 h-4 w-48" />
      </div>
      <div className="flex flex-col gap-1">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
      <div className="flex justify-end">
        <Skeleton className="h-10 w-28 rounded-md" />
      </div>
    </div>
  );
}

export function EmailSkeleton() {
  return (
    <div className="bg-background rounded-12 flex h-fit flex-col gap-5 p-6 sm:p-8">
      <div>
        <Skeleton className="h-6 w-36" />
        <Skeleton className="mt-0.5 h-4 w-64" />
      </div>
      <div className="flex flex-col gap-1">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
      <div className="flex justify-end">
        <Skeleton className="h-10 w-28 rounded-md" />
      </div>
    </div>
  );
}

export function PasswordSkeleton() {
  return (
    <div className="bg-background rounded-12 flex h-fit flex-col gap-5 p-6 sm:p-8">
      <div>
        <Skeleton className="h-6 w-24" />
        <Skeleton className="mt-0.5 h-4 w-48" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1 sm:col-span-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full rounded-md" />
          <Skeleton className="h-3 w-52" />
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>
      <div className="flex justify-end">
        <Skeleton className="h-10 w-36 rounded-md" />
      </div>
    </div>
  );
}

export function ActiveSessionsSkeleton() {
  return (
    <div className="rounded-12 bg-background flex flex-col gap-5 p-6 sm:p-8">
      <div>
        <Skeleton className="h-6 w-36" />
        <Skeleton className="mt-0.5 h-4 w-64" />
      </div>
      <div className="flex flex-col gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="bg-muted flex items-center gap-4 rounded-lg p-4"
          >
            <Skeleton className="size-10 shrink-0 rounded-lg" />
            <div className="flex flex-1 flex-col gap-1">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-3 w-36" />
            </div>
            <Skeleton className="h-3 w-12" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function DangerZoneSkeleton() {
  return (
    <div className="border-destructive/50 rounded-12 h-fit border p-6 sm:p-8">
      <div className="mb-5 flex flex-col gap-1">
        <Skeleton className="h-6 w-28" />
        <Skeleton className="h-4 w-72" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="border-muted-foreground/50 flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-3 w-36" />
          </div>
          <Skeleton className="h-10 w-full rounded-md sm:w-28" />
        </div>
        <div className="bg-destructive/5 border-destructive/50 flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-3 w-52" />
          </div>
          <Skeleton className="h-10 w-full rounded-md sm:w-28" />
        </div>
      </div>
    </div>
  );
}

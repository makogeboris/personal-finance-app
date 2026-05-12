import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function SummarySkeleton() {
  return (
    <div className="area-stats grid grid-cols-1 gap-3 pt-8 pb-2 md:grid-cols-3 md:gap-6">
      <div className="bg-foreground rounded-12 flex w-full flex-col items-start gap-2 p-5 sm:p-6">
        <Skeleton className="bg-primary-foreground/20 h-5 w-28" />
        <Skeleton className="bg-primary-foreground/20 h-9 w-40" />
      </div>

      <div className="bg-background rounded-12 flex w-full flex-col items-start gap-2 p-5 sm:p-6">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-9 w-40" />
      </div>

      <div className="bg-background rounded-12 flex w-full flex-col items-start gap-2 p-5 sm:p-6">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-9 w-40" />
      </div>
    </div>
  );
}

export function PotsSkeleton() {
  return (
    <div className="area-pots bg-background rounded-12 grid min-h-54.5 grid-cols-1 gap-5 px-5 py-6 sm:p-8">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-10" />
        <Skeleton className="h-4 w-20" />
      </div>

      <div className="@container">
        <div className="grid gap-5 @lg:grid-cols-2">
          <div className="bg-secondary rounded-12 flex min-w-0 items-center gap-5.5 p-5">
            <Skeleton className="h-5 w-5 shrink-0" />
            <div className="flex flex-col gap-3">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-9 w-24" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="w-1 self-stretch" />
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-3 w-14" />
                  <Skeleton className="h-4 w-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BudgetsSkeleton() {
  return (
    <div className="area-budgets bg-background rounded-12 grid grid-cols-1 px-5 py-6 sm:p-8">
      <div className="flex h-fit items-center justify-between">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-4 w-20" />
      </div>

      <div className="@container">
        <div className="flex flex-col items-center gap-0 @lg:flex-row">
          <Skeleton className="h-50 w-50 rounded-full" />

          <div className="flex w-full flex-1 flex-col gap-4 p-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="w-1 self-stretch" />
                <div className="flex flex-1 flex-col gap-1">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-4 w-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TransactionsSkeleton() {
  return (
    <div className="area-transactions bg-background rounded-12 grid grid-cols-1 gap-5.5 px-5 py-6 sm:p-8">
      <div className="flex h-fit items-center justify-between">
        <Skeleton className="h-6 w-28" />
        <Skeleton className="h-4 w-16" />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="sr-only">Recipient / Sender</TableHead>
            <TableHead className="sr-only text-right">
              Amount / Transaction Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell className="flex items-center gap-4">
                <Skeleton className="h-8 w-8 shrink-0 rounded-full sm:h-10 sm:w-10" />
                <Skeleton className="h-4 w-32" />
              </TableCell>
              <TableCell className="flex flex-col items-end gap-2">
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-3 w-20" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function RecurringBillsSkeleton() {
  return (
    <div className="area-bills bg-background rounded-12 grid min-h-81 grid-cols-1 gap-8 px-5 py-6 sm:p-8">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-36" />
        <Skeleton className="h-4 w-20" />
      </div>

      <div className="flex flex-col gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="bg-secondary flex items-center justify-between rounded-md border-l-4 px-4 py-5"
          >
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}

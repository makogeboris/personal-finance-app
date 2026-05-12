import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RecurringBillsControls from "../recurring-bills/Controls";

export function RecurringBillsSummarySkeleton() {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-6 lg:max-w-84 lg:flex-col">
      <div className="bg-foreground rounded-12 flex w-full gap-5 p-6 sm:flex-col sm:gap-8">
        <Skeleton className="bg-background/20 size-7.75 shrink-0 rounded-md" />
        <div className="flex flex-col gap-1">
          <Skeleton className="bg-background/20 h-4 w-20" />
          <Skeleton className="bg-background/20 h-9 w-28" />
        </div>
      </div>

      <div className="rounded-12 bg-background flex w-full flex-col gap-5 p-5">
        <Skeleton className="h-5 w-20" />

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-20" />
          </div>

          <Skeleton className="my-1 h-px w-full" />

          <div className="flex items-center justify-between">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-20" />
          </div>

          <Skeleton className="my-1 h-px w-full" />

          <div className="flex items-center justify-between">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function RecurringBillsTableSkeleton() {
  return (
    <div className="bg-background rounded-12 w-full px-5 py-6 sm:p-8">
      <RecurringBillsControls />

      <div className="@container">
        <Table className="mt-6">
          <TableCaption className="sr-only">
            A list of your recent bills.
          </TableCaption>
          <TableHeader className="hidden @lg:block">
            <TableRow className="bg-muted/50 px-2 lg:px-4">
              <TableHead className="text-muted-foreground w-full text-xs">
                Bill Title
              </TableHead>
              <TableHead className="text-muted-foreground w-full text-right text-xs @min-[10px]:hidden @lg:block">
                Due Date
              </TableHead>
              <TableHead className="text-muted-foreground w-full text-right text-xs">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({ length: 8 }).map((_, i) => (
              <TableRow key={i} className="lg:px-4">
                <TableCell className="flex w-full flex-col">
                  <div className="flex w-full items-center gap-4 py-4">
                    <Skeleton className="h-8 w-8 shrink-0 rounded-full sm:h-10 sm:w-10" />
                    <Skeleton className="h-4 w-36" />
                  </div>
                  <Skeleton className="mb-2 h-3 w-24 @lg:hidden" />
                </TableCell>

                <TableCell className="hidden w-full justify-end py-4 @lg:flex">
                  <Skeleton className="h-3 w-24" />
                </TableCell>

                <TableCell className="w-full py-4 text-right">
                  <Skeleton className="ml-auto h-4 w-14" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

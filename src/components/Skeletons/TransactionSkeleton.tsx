import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TransactionsTableSkeleton() {
  return (
    <div className="@container">
      <Table className="mt-6">
        <TableCaption className="sr-only">
          A list of your recent transactions.
        </TableCaption>

        <TableHeader className="hidden @2xl:block">
          <TableRow className="bg-muted/50 px-2 lg:px-4">
            <TableHead className="text-muted-foreground w-full text-xs">
              Recipient / Sender
            </TableHead>

            <TableHead className="text-muted-foreground hidden w-full text-right text-xs @2xl:block">
              Category
            </TableHead>

            <TableHead className="text-muted-foreground hidden w-full text-right text-xs @2xl:block">
              Transaction Date
            </TableHead>

            <TableHead className="text-muted-foreground w-full text-right text-xs">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 8 }).map((_, i) => (
            <TableRow key={i} className="lg:px-4">
              <TableCell className="flex flex-col @2xl:w-full">
                <div className="flex w-full items-center gap-4 pb-0 @2xl:py-4">
                  <Skeleton className="relative top-3 h-8 w-8 shrink-0 rounded-full sm:h-10 sm:w-10 @2xl:static" />
                  <Skeleton className="h-4 w-32" />
                </div>

                <div className="w-full pt-0 pl-12 text-left sm:pl-14 @2xl:hidden">
                  <Skeleton className="h-3 w-20" />
                </div>
              </TableCell>

              <TableCell className="hidden w-full justify-end py-4 text-left @2xl:flex">
                <Skeleton className="h-3 w-24" />
              </TableCell>

              <TableCell className="hidden w-full justify-end py-4 text-left @2xl:flex">
                <Skeleton className="h-3 w-20" />
              </TableCell>

              <TableCell className="flex flex-col-reverse gap-2 @2xl:w-full @2xl:flex-col @2xl:gap-0">
                <div className="w-full text-left @2xl:hidden">
                  <Skeleton className="h-3 w-20" />
                </div>

                <div className="w-full pb-0 text-right @2xl:py-4">
                  <Skeleton className="ml-auto h-4 w-16" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow className="bg-background! border-none! hover:bg-none!">
            <TableCell className="w-full pt-8 pb-0">
              <div className="flex items-center justify-between">
                <Skeleton className="h-10 w-12 sm:w-23" />

                <div className="flex items-center gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-10" />
                  ))}
                </div>

                <Skeleton className="h-10 w-12 sm:w-23" />
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export function TransactionControlsSkeleton() {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="relative w-full max-w-[320px]">
        <Skeleton className="h-12.5 w-full rounded-md" />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Skeleton className="hidden h-4 w-14 md:block" />
          <Skeleton className="h-10 w-10 rounded-md md:h-12.5 md:w-35" />
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="hidden h-4 w-16 md:block" />
          <Skeleton className="h-10 w-10 rounded-md md:h-12.5 md:w-42.5" />
        </div>
      </div>
    </div>
  );
}

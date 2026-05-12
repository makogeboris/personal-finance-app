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
              <TableCell className="flex w-full items-center gap-4 py-4">
                <Skeleton className="h-8 w-8 shrink-0 rounded-full sm:h-10 sm:w-10" />
                <Skeleton className="h-4 w-36" />
              </TableCell>
              <TableCell className="hidden w-full justify-end py-4 @2xl:flex">
                <Skeleton className="h-3 w-24" />
              </TableCell>
              <TableCell className="hidden w-full justify-end py-4 @2xl:flex">
                <Skeleton className="h-3 w-20" />
              </TableCell>
              <TableCell className="w-full py-4 text-right">
                <Skeleton className="ml-auto h-4 w-16" />
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

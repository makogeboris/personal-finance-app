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
import clsx from "clsx";
import Image from "next/image";
import TransactionsPagination from "./Pagination";
import type { Transaction } from "@/types";

function formatCurrency(amount: number) {
  const abs = Math.abs(amount).toFixed(2);
  return amount >= 0 ? `+$${abs}` : `-$${abs}`;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function TransactionsTable({
  transactions,
  total,
  page,
}: {
  transactions: Transaction[];
  total: number;
  page: number;
}) {
  if (transactions.length === 0) {
    return (
      <div className="bg-background rounded-12 mt-8 flex flex-col items-center gap-4 p-4 py-14 text-center">
        <div className="bg-sidebar-accent grid size-14 place-items-center rounded-full">
          <Image
            width={24}
            height={24}
            src="/icons/icon-nav-transactions.svg"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-primary text-base font-bold">
            No transactions found
          </h3>
          <p className="text-muted-foreground text-sm">
            Your recent income and expenses will appear here once activity is
            recorded.
          </p>
        </div>
      </div>
    );
  }

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
          {transactions.map((tx) => (
            <TableRow key={tx.date} className="lg:px-4">
              <TableCell className="flex flex-col @2xl:w-full">
                <div className="text-primary flex w-full items-center gap-4 pb-0 text-sm font-bold @2xl:py-4">
                  <Image
                    className="relative top-3 rounded-full sm:h-10 sm:w-10 @2xl:static"
                    width={32}
                    height={32}
                    src={`/avatars/${tx.avatar}`}
                    alt={tx.name}
                  />
                  {tx.name}
                </div>

                <div className="text-muted-foreground w-full justify-end pt-0 pl-12 text-left text-xs sm:pl-14 @2xl:hidden">
                  {tx.category}
                </div>
              </TableCell>

              <TableCell className="text-muted-foreground hidden w-full justify-end py-4 text-left text-xs @2xl:flex">
                {tx.category}
              </TableCell>

              <TableCell className="text-muted-foreground hidden w-full justify-end py-4 text-left text-xs @2xl:flex">
                {formatDate(tx.date)}
              </TableCell>

              <TableCell className="flex flex-col-reverse gap-2 @2xl:w-full @2xl:flex-col @2xl:gap-0">
                <div className="text-muted-foreground w-full justify-end text-left text-xs @2xl:hidden">
                  {formatDate(tx.date)}
                </div>

                <div
                  className={clsx(
                    "w-full pb-0 text-right text-sm font-bold @2xl:py-4",
                    {
                      "text-chart-1": tx.amount >= 0,
                      "text-primary": tx.amount < 0,
                    },
                  )}
                >
                  {formatCurrency(tx.amount)}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow className="bg-background! border-none! hover:bg-none!">
            <TableCell className="w-full pt-8 pb-0">
              <TransactionsPagination total={total} page={page} perPage={10} />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

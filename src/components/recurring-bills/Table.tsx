import clsx from "clsx";
import Image from "next/image";
import TransactionAvatar from "../shared/TransactionAvatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { RecurringBill } from "@/lib/data/getRecurringBills";
import { NavIcons } from "../shared/NavIcons";

function ordinal(day: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = day % 100;
  return day + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function RecurringBillsTable({ bills }: { bills: RecurringBill[] }) {
  if (bills.length === 0) {
    return (
      <div className="bg-background rounded-12 mt-8 flex flex-col items-center gap-4 p-4 py-14 text-center">
        <div className="bg-sidebar-accent grid size-14 place-items-center rounded-full">
          <Image
            width={24}
            height={24}
            src="/icons/icon-nav-recurring-bills.svg"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-primary text-base font-bold">
            No recurring bills
          </h3>
          <p className="text-muted-foreground text-sm">
            Add recurring bills to stay on top of upcoming payments and
            subscriptions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="@container">
      <Table className="mt-6">
        <TableCaption className="sr-only">
          A list of your recurring bills.
        </TableCaption>
        <TableHeader className="hidden @lg:block">
          <TableRow className="bg-muted/50 px-2 lg:px-4">
            <TableHead className="text-muted-foreground w-full text-xs">
              Bill Title
            </TableHead>
            <TableHead className="text-muted-foreground w-full text-right text-xs @lg:block">
              Due Date
            </TableHead>
            <TableHead className="text-muted-foreground w-full text-right text-xs">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bills.map((bill) => {
            const dueLabel = `Monthly - ${ordinal(bill.dayOfMonth)}`;
            const dateColor = bill.isPaid
              ? "text-chart-1"
              : bill.isDueSoon
                ? "text-destructive"
                : "text-muted-foreground";

            return (
              <TableRow key={bill.id} className="lg:px-4">
                {/* Name + mobile due date */}
                <TableCell className="flex w-full flex-col">
                  <div className="text-primary flex w-full items-center gap-4 py-4 text-sm font-bold">
                    <TransactionAvatar
                      avatar={bill.avatar}
                      name={bill.name}
                      size={32}
                    />
                    {bill.name}
                  </div>
                  {/* Due date mobile */}
                  <div
                    className={clsx(
                      "flex w-full gap-2 py-0 text-left text-xs @lg:hidden",
                      dateColor,
                    )}
                  >
                    {dueLabel}
                    {bill.isPaid && NavIcons.paidIcon}
                    {bill.isDueSoon && NavIcons.dueSoonIcon}
                  </div>
                </TableCell>

                {/* Due date desktop */}
                <TableCell
                  className={clsx(
                    "w-full justify-end gap-2 py-4 text-left text-xs @min-[10px]:hidden @lg:flex",
                    dateColor,
                  )}
                >
                  {dueLabel}
                  {bill.isPaid && NavIcons.paidIcon}
                  {bill.isDueSoon && NavIcons.dueSoonIcon}
                </TableCell>

                {/* Amount */}
                <TableCell
                  className={clsx(
                    "w-full py-4 text-right text-sm font-bold",
                    bill.isDueSoon ? "text-destructive" : "text-primary",
                  )}
                >
                  ${bill.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

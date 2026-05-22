import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TransactionAvatar from "../shared/TransactionAvatar";
import { NavIcons } from "../shared/NavIcons";
import Image from "next/image";

type TxSummary = {
  id: string;
  name: string;
  avatar: string;
  amount: number;
  date: string;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatAmount(amount: number) {
  const abs = Math.abs(amount).toFixed(2);
  return amount >= 0 ? `+$${abs}` : `-$${abs}`;
}

export default function Transactions({
  transactions,
}: {
  transactions: TxSummary[];
}) {
  return (
    <div className="area-transactions bg-background rounded-12 grid grid-cols-1 gap-5.5 px-5 py-6 sm:p-8">
      <div className="flex h-fit items-center justify-between">
        <h2 className="text-primary text-xl font-bold">Transactions</h2>
        <Link
          className="group hover:text-primary text-muted-foreground focus-visible:outline-primary flex items-center gap-3 rounded-xs text-sm capitalize transition-colors focus-visible:outline-1"
          href="/transactions"
        >
          View all
          {NavIcons.chevronRight}
        </Link>
      </div>

      {transactions.length === 0 ? (
        <div className="flex flex-col items-center gap-4 text-center">
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
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="sr-only">Recipient / Sender</TableHead>
              <TableHead className="sr-only text-right">
                Amount / Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell className="text-primary flex items-center gap-4 text-sm font-bold">
                  <TransactionAvatar
                    avatar={tx.avatar}
                    name={tx.name}
                    size={32}
                  />
                  {tx.name}
                </TableCell>
                <TableCell className="flex flex-col items-end gap-2">
                  <span
                    className={`text-sm font-bold ${tx.amount >= 0 ? "text-chart-1" : "text-primary"}`}
                  >
                    {formatAmount(tx.amount)}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {formatDate(tx.date)}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

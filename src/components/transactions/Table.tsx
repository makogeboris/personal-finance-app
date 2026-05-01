import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";
import Image from "next/image";

const transactions = [
  {
    avatar: "/avatars/emma-richardson.jpg",
    recipientSender: "Emma Richardson",
    category: "General",
    amount: "$250.00",
    transactionDate: "17 Aug 2024",
    incomming: true,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    recipientSender: "Savory Bites Bistro",
    category: "Dining Out",
    amount: "$150.00",
    transactionDate: "19 Aug 2024",
    incomming: false,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    recipientSender: "Daniel Carter",
    category: "Groceries",
    amount: "$350.00",
    transactionDate: "13 Aug 2024",
    incomming: false,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    recipientSender: "Sun Park",
    category: "General",
    amount: "$450.00",
    transactionDate: "17 Aug 2024",
    incomming: true,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    recipientSender: "Urban Services Hub",
    category: "General",
    amount: "$550.00",
    transactionDate: "19 Aug 2024",
    incomming: false,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    recipientSender: "Liam Hughes",
    category: "Dining Out",
    amount: "$200.00",
    transactionDate: "13 Aug 2024",
    incomming: true,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    recipientSender: "Lily Ramirez",
    category: "Entertainment",
    amount: "$300.00",
    transactionDate: "17 Aug 2024",
    incomming: false,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    recipientSender: "Ethan Clark",
    category: "Entertainment",
    amount: "$300.00",
    transactionDate: "17 Aug 2024",
    incomming: false,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    recipientSender: "James Thompson",
    category: "Entertainment",
    amount: "$300.00",
    transactionDate: "17 Aug 2024",
    incomming: false,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    recipientSender: "Pixel Playground",
    category: "Entertainment",
    amount: "$300.00",
    transactionDate: "17 Aug 2024",
    incomming: true,
  },
];

export function TransactionsTable() {
  return (
    <Table className="mt-6">
      <TableCaption className="sr-only">
        A list of your recent transactions.
      </TableCaption>
      <TableHeader>
        <TableRow className="lg:px-4">
          <TableHead className="text-muted-foreground w-full text-xs">
            Recipient / Sender
          </TableHead>
          <TableHead className="text-muted-foreground hidden w-full text-right text-xs sm:block">
            Category
          </TableHead>
          <TableHead className="text-muted-foreground hidden w-full text-right text-xs sm:block">
            Transaction Date
          </TableHead>
          <TableHead className="text-muted-foreground w-full text-right text-xs">
            Amount
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.recipientSender} className="lg:px-4">
            <TableCell className="text-primary flex w-full items-center gap-4 py-4 text-sm font-bold">
              <Image
                className="rounded-full sm:h-10 sm:w-10"
                width={32}
                height={32}
                src={transaction.avatar}
                alt=""
              />
              {transaction.recipientSender}
            </TableCell>
            <TableCell className="text-muted-foreground hidden w-full justify-end py-4 text-left text-xs sm:flex">
              {transaction.category}
            </TableCell>
            <TableCell className="text-muted-foreground hidden w-full justify-end py-4 text-left text-xs sm:flex">
              {transaction.transactionDate}
            </TableCell>

            <TableCell
              className={clsx("w-full py-4 text-right text-sm font-bold", {
                "text-chart-1": transaction.incomming,
                "text-primary": !transaction.incomming,
              })}
            >
              {transaction.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RecurringBillsControls from "./Controls";
import clsx from "clsx";
import Image from "next/image";

const bills = [
  {
    avatar: "/avatars/emma-richardson.jpg",
    title: "Emma Richardson",
    amount: "$250.00",
    dueDate: "Monthly - 2nd",
    incomming: true,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    title: "Savory Bites Bistro",
    amount: "$150.00",
    dueDate: "Monthly - 11th",
    incomming: false,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    title: "Daniel Carter",
    amount: "$350.00",
    dueDate: "Monthly - 21st",
    incomming: false,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    title: "Sun Park",
    amount: "$450.00",
    dueDate: "Monthly - 2nd",
    incomming: true,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    title: "Urban Services Hub",
    amount: "$550.00",
    dueDate: "Monthly - 11th",
    incomming: false,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    title: "Liam Hughes",
    amount: "$200.00",
    dueDate: "Monthly - 21st",
    incomming: true,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    title: "Lily Ramirez",
    amount: "$300.00",
    dueDate: "Monthly - 2nd",
    incomming: false,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    title: "Ethan Clark",
    amount: "$300.00",
    dueDate: "Monthly - 2nd",
    incomming: false,
  },
];

export function RecurringBillsTable() {
  return (
    <div className="bg-background rounded-12 w-full px-5 py-6 sm:p-8">
      <RecurringBillsControls />
      <div className="@container">
        <Table className="mt-6">
          <TableCaption className="sr-only">
            A list of your recent bills.
          </TableCaption>
          <TableHeader>
            <TableRow className="lg:px-4">
              <TableHead className="text-muted-foreground w-full text-xs">
                Bill Title
              </TableHead>
              <TableHead className="text-muted-foreground w-full text-right text-xs @min-[10px]:hidden @md:block">
                Due Date
              </TableHead>
              <TableHead className="text-muted-foreground w-full text-right text-xs">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bills.map((bill) => (
              <TableRow key={bill.title} className="lg:px-4">
                <TableCell className="text-primary flex w-full items-center gap-4 py-4 text-sm font-bold">
                  <Image
                    className="rounded-full sm:h-10 sm:w-10"
                    width={32}
                    height={32}
                    src={bill.avatar}
                    alt=""
                  />
                  {bill.title}
                </TableCell>

                <TableCell
                  className={clsx(
                    "w-full justify-end gap-2 py-4 text-left text-xs @min-[10px]:hidden @md:flex",
                    {
                      "text-chart-1": bill.incomming,
                      "text-muted-foreground": !bill.incomming,
                    },
                  )}
                >
                  {bill.dueDate}

                  {bill.incomming ? (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 0C5.21442 0 3.95772 0.381218 2.8888 1.09545C1.81988 1.80968 0.986756 2.82484 0.494786 4.01256C0.00281635 5.20028 -0.125905 6.50721 0.124899 7.76809C0.375703 9.02896 0.994767 10.1872 1.90381 11.0962C2.81285 12.0052 3.97104 12.6243 5.23192 12.8751C6.49279 13.1259 7.79973 12.9972 8.98744 12.5052C10.1752 12.0132 11.1903 11.1801 11.9046 10.1112C12.6188 9.04229 13 7.78558 13 6.5C12.9982 4.77665 12.3128 3.12441 11.0942 1.90582C9.8756 0.687224 8.22335 0.00181989 6.5 0ZM9.35375 5.35375L5.85375 8.85375C5.80732 8.90024 5.75217 8.93712 5.69147 8.96228C5.63077 8.98744 5.56571 9.00039 5.5 9.00039C5.4343 9.00039 5.36923 8.98744 5.30853 8.96228C5.24783 8.93712 5.19269 8.90024 5.14625 8.85375L3.64625 7.35375C3.55243 7.25993 3.49972 7.13268 3.49972 7C3.49972 6.86732 3.55243 6.74007 3.64625 6.64625C3.74007 6.55243 3.86732 6.49972 4 6.49972C4.13268 6.49972 4.25993 6.55243 4.35375 6.64625L5.5 7.79313L8.64625 4.64625C8.69271 4.59979 8.74786 4.56294 8.80855 4.5378C8.86925 4.51266 8.93431 4.49972 9 4.49972C9.0657 4.49972 9.13075 4.51266 9.19145 4.5378C9.25215 4.56294 9.3073 4.59979 9.35375 4.64625C9.40021 4.6927 9.43706 4.74786 9.4622 4.80855C9.48734 4.86925 9.50028 4.9343 9.50028 5C9.50028 5.0657 9.48734 5.13075 9.4622 5.19145C9.43706 5.25214 9.40021 5.3073 9.35375 5.35375Z"
                        fill="#277C78"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 0C5.21442 0 3.95772 0.381218 2.8888 1.09545C1.81988 1.80968 0.986756 2.82484 0.494786 4.01256C0.00281635 5.20028 -0.125905 6.50721 0.124899 7.76809C0.375703 9.02896 0.994767 10.1872 1.90381 11.0962C2.81285 12.0052 3.97104 12.6243 5.23192 12.8751C6.49279 13.1259 7.79973 12.9972 8.98744 12.5052C10.1752 12.0132 11.1903 11.1801 11.9046 10.1112C12.6188 9.04229 13 7.78558 13 6.5C12.9982 4.77665 12.3128 3.12441 11.0942 1.90582C9.8756 0.687224 8.22335 0.00181989 6.5 0ZM6 3.5C6 3.36739 6.05268 3.24021 6.14645 3.14645C6.24022 3.05268 6.36739 3 6.5 3C6.63261 3 6.75979 3.05268 6.85356 3.14645C6.94732 3.24021 7 3.36739 7 3.5V7C7 7.13261 6.94732 7.25979 6.85356 7.35355C6.75979 7.44732 6.63261 7.5 6.5 7.5C6.36739 7.5 6.24022 7.44732 6.14645 7.35355C6.05268 7.25979 6 7.13261 6 7V3.5ZM6.5 10C6.35167 10 6.20666 9.95601 6.08333 9.8736C5.95999 9.79119 5.86386 9.67406 5.80709 9.53701C5.75033 9.39997 5.73548 9.24917 5.76441 9.10368C5.79335 8.9582 5.86478 8.82456 5.96967 8.71967C6.07456 8.61478 6.2082 8.54335 6.35368 8.51441C6.49917 8.48547 6.64997 8.50033 6.78701 8.55709C6.92406 8.61386 7.04119 8.70999 7.1236 8.83332C7.20602 8.95666 7.25 9.10166 7.25 9.25C7.25 9.44891 7.17098 9.63968 7.03033 9.78033C6.88968 9.92098 6.69892 10 6.5 10Z"
                        fill="#C94736"
                      />
                    </svg>
                  )}
                </TableCell>

                <TableCell
                  className={clsx("w-full py-4 text-right text-sm font-bold", {
                    "text-destructive": bill.incomming,
                    "text-primary": !bill.incomming,
                  })}
                >
                  {bill.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function Transactions() {
  return (
    <div className="area-transactions bg-background rounded-12 grid grid-cols-1 gap-5.5 px-5 py-6 sm:p-8">
      <div className="flex h-fit items-center justify-between">
        <h2 className="text-primary text-xl font-bold">Transactions</h2>
        <Link
          className="group hover:text-primary text-muted-foreground flex items-center gap-3 text-sm capitalize transition-colors"
          href="/transactions"
        >
          View all
          <svg
            width="5"
            height="9"
            viewBox="0 0 5 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.640312 0.109986L4.39031 3.85999C4.42518 3.89481 4.45284 3.93617 4.47171 3.9817C4.49058 4.02722 4.50029 4.07602 4.50029 4.1253C4.50029 4.17458 4.49058 4.22338 4.47171 4.2689C4.45284 4.31443 4.42518 4.35578 4.39031 4.39061L0.640313 8.14061C0.587867 8.19312 0.521022 8.22888 0.44824 8.24337C0.375458 8.25787 0.300012 8.25044 0.231454 8.22203C0.162895 8.19363 0.104307 8.14552 0.063105 8.08379C0.0219034 8.02207 -5.82985e-05 7.94951 9.97705e-08 7.8753L-2.28065e-07 0.375299C-5.86328e-05 0.301088 0.0219031 0.228528 0.0631046 0.166805C0.104306 0.105083 0.162895 0.0569735 0.231453 0.0285664C0.300012 0.000158297 0.375458 -0.00726797 0.44824 0.00722597C0.521022 0.0217199 0.587867 0.0574817 0.640312 0.109986Z"
              fill="currentColor"
            />
          </svg>
        </Link>
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
          <TableRow>
            <TableCell className="text-primary flex items-center gap-4 text-sm font-bold">
              <Image
                className="rounded-full sm:h-10 sm:w-10"
                width={32}
                height={32}
                src="/avatars/emma-richardson.jpg"
                alt=""
              />
              Emma Richardson
            </TableCell>

            <TableCell className="flex flex-col items-end gap-2">
              <span className="text-chart-1 text-sm font-bold">+$75.50</span>
              <span className="text-muted-foreground text-xs">19 Aug 2024</span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-primary flex items-center gap-4 text-sm font-bold">
              <Image
                className="rounded-full sm:h-10 sm:w-10"
                width={32}
                height={32}
                src="/avatars/savory-bites-bistro.jpg"
                alt=""
              />
              Savory Bites Bistro
            </TableCell>

            <TableCell className="flex flex-col items-end gap-2">
              <span className="text-primary text-sm font-bold">-$55.50</span>
              <span className="text-muted-foreground text-xs">19 Aug 2024</span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-primary flex items-center gap-4 text-sm font-bold">
              <Image
                className="rounded-full sm:h-10 sm:w-10"
                width={32}
                height={32}
                src="/avatars/daniel-carter.jpg"
                alt=""
              />
              Daniel Carter
            </TableCell>

            <TableCell className="flex flex-col items-end gap-2">
              <span className="text-primary text-sm font-bold">-$42.30</span>
              <span className="text-muted-foreground text-xs">18 Aug 2024</span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-primary flex items-center gap-4 text-sm font-bold">
              <Image
                className="rounded-full sm:h-10 sm:w-10"
                width={32}
                height={32}
                src="/avatars/sun-park.jpg"
                alt=""
              />
              Sun Park
            </TableCell>

            <TableCell className="flex flex-col items-end gap-2">
              <span className="text-chart-1 text-sm font-bold">+$120.00</span>
              <span className="text-muted-foreground text-xs">17 Aug 2024</span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-primary flex items-center gap-4 text-sm font-bold">
              <Image
                className="rounded-full sm:h-10 sm:w-10"
                width={32}
                height={32}
                src="/avatars/urban-services-hub.jpg"
                alt=""
              />
              Urban Services Hub
            </TableCell>

            <TableCell className="flex flex-col items-end gap-2">
              <span className="text-primary text-sm font-bold">-$65.00</span>
              <span className="text-muted-foreground text-xs">17 Aug 2024</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

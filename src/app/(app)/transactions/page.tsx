import TransationControls from "@/components/transactions/Controls";
import { TransactionsTable } from "@/components/transactions/Table";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Transactions",
};

export default function Transactions() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-primary text-32 font-bold">Transactions</h1>
        <p className="text-muted-foreground text-sm">
          Track and review all your money movements.
        </p>
      </div>

      <div className="bg-background rounded-12 mt-8 px-5 py-6 sm:p-8">
        <TransationControls />
        <TransactionsTable />

        {/* <div className="bg-background rounded-12 mt-8 flex flex-col items-center gap-4 p-4 py-14 text-center">
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
        </div> */}
      </div>
    </>
  );
}

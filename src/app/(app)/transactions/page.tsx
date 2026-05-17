import type { Metadata } from "next";
import { getTransactions } from "@/lib/data/getTransactions";
import TransactionControls from "@/components/transactions/Controls";
import TransactionsClient from "@/components/transactions/TransactionsClient";
import { Suspense } from "react";
import { TransactionsTableSkeleton } from "@/components/Skeletons/TransactionSkeleton";
import AddNewTransaction from "@/components/transactions/AddNewTransaction";

export const metadata: Metadata = { title: "Transactions" };

export default async function Transactions() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-primary text-32 font-bold">Transactions</h1>
          <p className="text-muted-foreground xs:block hidden text-sm">
            Track and review all your money movements.
          </p>
        </div>

        <AddNewTransaction />
      </div>

      <div className="bg-background rounded-12 mt-8 px-5 py-6 sm:p-8">
        <TransactionControls />
        <Suspense fallback={<TransactionsTableSkeleton />}>
          <TransactionsData />
        </Suspense>
      </div>
    </>
  );
}

async function TransactionsData() {
  const { transactions } = await getTransactions();
  return <TransactionsClient transactions={transactions} />;
}

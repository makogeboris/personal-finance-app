import type { Metadata } from "next";
import { getTransactions } from "@/lib/data/getTransactions";
import TransactionControls from "@/components/transactions/Controls";
import TransactionsClient from "@/components/transactions/TransactionsClient";
import { Suspense } from "react";
import { TransactionsTableSkeleton } from "@/components/Skeletons/TransactionSkeleton";

export const metadata: Metadata = { title: "Transactions" };

export default async function Transactions() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-primary text-32 font-bold">Transactions</h1>
        <p className="text-muted-foreground text-sm">
          Track and review all your money movements.
        </p>
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

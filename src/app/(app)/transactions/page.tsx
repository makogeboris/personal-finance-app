import TransationControls from "@/components/transactions/Controls";
import { TransactionsPagination } from "@/components/transactions/Pagination";
import { TransactionsTable } from "@/components/transactions/Table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transactions",
};

export default function Transactions() {
  return (
    <>
      <h1 className="text-primary text-32 font-bold">Transactions</h1>

      <div className="bg-background rounded-12 mt-8 px-5 py-6 sm:p-8">
        <TransationControls />
        <TransactionsTable />
        <TransactionsPagination />
      </div>
    </>
  );
}

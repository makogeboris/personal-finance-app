"use client";

import { useQueryStates, parseAsString } from "nuqs";
import { RecurringBillsTable } from "./Table";
import RecurringBillsControls from "./Controls";
import type { RecurringBill } from "@/lib/data/getRecurringBills";

export default function RecurringBillsClient({
  bills,
}: {
  bills: RecurringBill[];
}) {
  const [{ search, sort }] = useQueryStates({
    search: parseAsString.withDefault(""),
    sort: parseAsString.withDefault("latest"),
  });

  let filtered = bills;
  if (search) {
    filtered = filtered.filter((b) =>
      b.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  filtered = [...filtered].sort((a, b) => {
    switch (sort) {
      case "latest":
        return a.dayOfMonth - b.dayOfMonth;
      case "oldest":
        return b.dayOfMonth - a.dayOfMonth;
      case "az":
        return a.name.localeCompare(b.name);
      case "za":
        return b.name.localeCompare(a.name);
      case "highest":
        return b.amount - a.amount;
      case "lowest":
        return a.amount - b.amount;
      default:
        return 0;
    }
  });

  return (
    <div className="bg-background rounded-12 w-full px-5 py-6 sm:p-8">
      <RecurringBillsControls />
      <RecurringBillsTable bills={filtered} />
    </div>
  );
}

"use client";

import { useQueryStates, parseAsString, parseAsInteger } from "nuqs";
import TransactionsTable from "./Table";
import type { Transaction, Category, SortOption } from "@/types";

const PER_PAGE = 10;

export default function TransactionsClient({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const [{ search, category, sort, page }] = useQueryStates({
    search: parseAsString.withDefault(""),
    category: parseAsString.withDefault("All"),
    sort: parseAsString.withDefault("latest"),
    page: parseAsInteger.withDefault(1),
  });

  let filtered = transactions;

  if (search) {
    filtered = filtered.filter((t) =>
      t.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  if (category !== "All") {
    filtered = filtered.filter((t) => t.category === category);
  }

  filtered = [...filtered].sort((a, b) => {
    switch (sort as SortOption) {
      case "latest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "a-z":
        return a.name.localeCompare(b.name);
      case "z-a":
        return b.name.localeCompare(a.name);
      case "highest":
        return b.amount - a.amount;
      case "lowest":
        return a.amount - b.amount;
      default:
        return 0;
    }
  });

  const total = filtered.length;
  const start = (page - 1) * PER_PAGE;
  const paginated = filtered.slice(start, start + PER_PAGE);

  return (
    <TransactionsTable transactions={paginated} total={total} page={page} />
  );
}

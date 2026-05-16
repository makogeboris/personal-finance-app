"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldSeparator } from "../ui/field";
import { useQueryStates, parseAsString, parseAsInteger } from "nuqs";
import type { Category, SortOption } from "@/types";
import { NavIcons } from "../shared/NavIcons";

const SORT_ITEMS: { label: string; value: SortOption }[] = [
  { label: "Latest", value: "latest" },
  { label: "Oldest", value: "oldest" },
  { label: "A to Z", value: "a-z" },
  { label: "Z to A", value: "z-a" },
  { label: "Highest", value: "highest" },
  { label: "Lowest", value: "lowest" },
];

const CATEGORIES: { label: string; value: Category }[] = [
  { label: "All Transactions", value: "All" },
  { label: "Entertainment", value: "Entertainment" },
  { label: "Bills", value: "Bills" },
  { label: "Groceries", value: "Groceries" },
  { label: "Dining Out", value: "Dining Out" },
  { label: "Transportation", value: "Transportation" },
  { label: "Personal Care", value: "Personal Care" },
  { label: "Education", value: "Education" },
  { label: "Lifestyle", value: "Lifestyle" },
  { label: "Shopping", value: "Shopping" },
  { label: "General", value: "General" },
];

export function Sort() {
  const [{ sort }, setParams] = useQueryStates({
    sort: parseAsString.withDefault("latest"),
    page: parseAsInteger.withDefault(1),
  });

  return (
    <Select
      value={sort}
      onValueChange={(value) => setParams({ sort: value, page: 1 })}
    >
      <div className="w-full items-center gap-2 md:flex">
        <span className="text-muted-foreground hidden text-sm whitespace-nowrap md:block">
          Sort by
        </span>
        <SelectTrigger className="flex items-center md:h-12.5 md:w-35 md:gap-2">
          <span className="md:hidden">{NavIcons.sort}</span>

          <span className="hidden md:inline">
            <SelectValue
              className="text-primary text-sm"
              placeholder="Latest"
            />
          </span>
        </SelectTrigger>
      </div>

      <SelectContent position="popper" side="bottom" sideOffset={4}>
        <SelectGroup>
          <SelectLabel className="sr-only">Sort by</SelectLabel>
          {SORT_ITEMS.map((item, index) => (
            <div key={item.value}>
              <SelectItem value={item.value}>{item.label}</SelectItem>
              {index !== SORT_ITEMS.length - 1 && (
                <FieldSeparator className="-my-2" />
              )}
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function Filter() {
  const [{ category }, setParams] = useQueryStates({
    category: parseAsString.withDefault("All"),
    page: parseAsInteger.withDefault(1),
  });

  return (
    <Select
      value={category}
      onValueChange={(value) => setParams({ category: value, page: 1 })}
    >
      <div className="w-full items-center gap-2 md:flex">
        <span className="text-muted-foreground hidden text-sm whitespace-nowrap md:block">
          Category
        </span>
        <SelectTrigger className="flex items-center md:h-12.5 md:w-45 md:gap-2">
          <span className="md:hidden">{NavIcons.filter}</span>
          <span className="hidden md:inline">
            <SelectValue
              className="text-primary text-sm"
              placeholder="All Transactions"
            />
          </span>
        </SelectTrigger>
      </div>

      <SelectContent position="popper" side="bottom" sideOffset={4}>
        <SelectGroup>
          <SelectLabel className="sr-only">Transactions</SelectLabel>
          {CATEGORIES.map((cat, index) => (
            <div key={cat.value}>
              <SelectItem value={cat.value}>{cat.label}</SelectItem>
              {index !== CATEGORIES.length - 1 && (
                <FieldSeparator className="-my-2" />
              )}
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

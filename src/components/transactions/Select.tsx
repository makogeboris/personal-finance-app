import Image from "next/image";
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

const CATEGORIES = [
  { label: "All Transactions", value: "all" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Bills", value: "bills" },
  { label: "Groceries", value: "groceries" },
  { label: "Dining Out", value: "dining-out" },
  { label: "Transportation", value: "transportation" },
  { label: "Personal Care", value: "personal-care" },
  { label: "Education", value: "education" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Shopping", value: "shopping" },
  { label: "General", value: "general" },
];

const SORT_ITEMS = [
  { label: "Latest", value: "latest" },
  { label: "Oldest", value: "oldest" },
  { label: "A to Z", value: "az" },
  { label: "Z to A", value: "za" },
  { label: "Highest", value: "highest" },
  { label: "Lowest", value: "lowest" },
];

export function Sort() {
  return (
    <Select>
      <div className="w-full items-center gap-2 md:flex">
        <span className="text-muted-foreground hidden text-sm whitespace-nowrap md:block">
          Sort by
        </span>
        <SelectTrigger className="flex w-full items-center md:gap-2">
          <Image
            src="/icons/icon-sort-mobile.svg"
            alt="Sort"
            width={16}
            height={16}
            className="shrink-0 md:hidden"
          />

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
  return (
    <Select>
      <div className="w-full items-center gap-2 md:flex">
        <span className="text-muted-foreground hidden text-sm whitespace-nowrap md:block">
          Category
        </span>
        <SelectTrigger className="flex w-full items-center md:gap-2">
          <Image
            src="/icons/icon-filter-mobile.svg"
            alt="Sort"
            width={16}
            height={16}
            className="shrink-0 md:hidden"
          />

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
          {CATEGORIES.map((category, index) => (
            <div key={category.value}>
              <SelectItem value={category.value}>{category.label}</SelectItem>

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

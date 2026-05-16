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
import { NavIcons } from "../shared/NavIcons";

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

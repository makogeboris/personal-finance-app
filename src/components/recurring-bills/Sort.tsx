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

export function Sort() {
  return (
    <Select>
      {/* Mobile: icon-only trigger */}
      <SelectTrigger className="flex h-10 w-10 items-center justify-center p-0 md:hidden">
        <Image
          src="/icons/icon-sort-mobile.svg"
          alt="Sort"
          width={16}
          height={16}
          style={{ width: "auto", height: "auto" }}
        />
      </SelectTrigger>

      {/* Desktop: full trigger */}
      <div className="hidden w-full items-center gap-2 md:flex">
        <span className="text-muted-foreground text-sm whitespace-nowrap">
          Sort by
        </span>
        <SelectTrigger className="">
          <SelectValue className="text-primary text-sm" placeholder="Latest" />
        </SelectTrigger>
      </div>

      <SelectContent position="popper" side="bottom" sideOffset={4}>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          <SelectItem value="oldest">Oldest</SelectItem>
          <SelectItem value="az">A → Z</SelectItem>
          <SelectItem value="za">Z → A</SelectItem>
          <SelectItem value="highest">Highest</SelectItem>
          <SelectItem value="lowest">Lowest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

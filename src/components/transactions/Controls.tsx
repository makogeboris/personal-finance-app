import Image from "next/image";
import { Filter, Sort } from "./Select";

export default function TransationControls() {
  return (
    <div className="flex items-center justify-between gap-6">
      <form id="form" action="#" className="relative w-full max-w-[320px]">
        <label htmlFor="search" className="sr-only">
          Search transaction
        </label>
        <input
          id="search"
          className="text-primary placeholder-accent focus-visible:outline-primary border-accent w-full rounded-md border px-5 py-3 text-sm focus-visible:outline-1"
          type="search"
          name="search"
          placeholder="Search transaction"
        />

        <Image
          width={16}
          height={16}
          style={{ width: "auto", height: "auto" }}
          className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 transform"
          src="/icons/icon-search.svg"
          alt=""
        />
      </form>

      <div className="flex items-center gap-1 md:gap-6">
        <Sort />
        <Filter />
      </div>
    </div>
  );
}

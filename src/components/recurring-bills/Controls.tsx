"use client";

import Image from "next/image";
import { useQueryStates, parseAsString } from "nuqs";
import { Sort } from "./Sort";

export default function RecurringBillsControls() {
  const [{ search }, setParams] = useQueryStates({
    search: parseAsString.withDefault(""),
    sort: parseAsString.withDefault("latest"),
  });

  return (
    <div className="flex w-full items-center justify-between gap-6">
      <form
        action="#"
        className="relative w-full max-w-[320px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="search" className="sr-only">
          Search bills
        </label>
        <input
          id="search"
          className="text-primary placeholder-accent focus-visible:outline-primary border-accent w-full rounded-md border px-5 py-3 text-sm focus-visible:outline-1"
          type="search"
          placeholder="Search bills"
          value={search}
          onChange={(e) => setParams({ search: e.target.value || null })}
        />
        <Image
          width={16}
          height={16}
          style={{ width: "auto", height: "auto" }}
          className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2"
          src="/icons/icon-search.svg"
          alt=""
        />
      </form>

      <Sort />
    </div>
  );
}

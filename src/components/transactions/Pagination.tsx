"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useQueryState, parseAsInteger } from "nuqs";

export default function TransactionsPagination({
  total,
  page,
  perPage,
}: {
  total: number;
  page: number;
  perPage: number;
}) {
  const [, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const totalPages = Math.ceil(total / perPage);

  if (totalPages <= 1) return null;

  function getDesktopPages(): (number | "ellipsis")[] {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (page <= 3) {
      return [1, 2, 3, 4, "ellipsis", totalPages];
    }
    if (page >= totalPages - 2) {
      return [
        1,
        "ellipsis",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
    return [1, "ellipsis", page - 1, page, page + 1, "ellipsis", totalPages];
  }

  function getMobilePages(): (number | "ellipsis")[] {
    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (page <= 2) {
      return [1, 2, "ellipsis", totalPages];
    }
    if (page >= totalPages - 1) {
      return [1, "ellipsis", totalPages - 1, totalPages];
    }
    return [1, "ellipsis", page, totalPages];
  }

  const desktopPages = getDesktopPages();
  const mobilePages = getMobilePages();

  const renderPages = (pages: (number | "ellipsis")[]) =>
    pages.map((p, i) =>
      p === "ellipsis" ? (
        <PaginationItem key={`ellipsis-${i}`}>
          <PaginationEllipsis />
        </PaginationItem>
      ) : (
        <PaginationItem key={p}>
          <PaginationLink
            href="#"
            isActive={p === page}
            onClick={(e) => {
              e.preventDefault();
              setPage(p);
            }}
          >
            {p}
          </PaginationLink>
        </PaginationItem>
      ),
    );

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page > 1) setPage(page - 1);
            }}
            aria-disabled={page <= 1}
            className={page <= 1 ? "pointer-events-none opacity-40" : ""}
          />
        </PaginationItem>

        <div className="flex items-center gap-1 sm:hidden">
          {renderPages(mobilePages)}
        </div>

        <div className="hidden items-center gap-1 sm:flex">
          {renderPages(desktopPages)}
        </div>

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page < totalPages) setPage(page + 1);
            }}
            aria-disabled={page >= totalPages}
            className={
              page >= totalPages ? "pointer-events-none opacity-40" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

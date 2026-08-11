"use client";

interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  itemLabel: string;
}

export default function Pagination({ page, pageSize, total, onPageChange, itemLabel }: PaginationProps) {
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const shownCount = Math.min(pageSize, Math.max(0, total - (page - 1) * pageSize));

  return (
    <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="text-sm text-gray-500">
        Showing {shownCount} of {total} {itemLabel}
      </p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page <= 1}
          className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm font-medium text-black shadow-sm transition hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-sm"
        >
          Previous
        </button>
        {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            onClick={() => onPageChange(pageNumber)}
            className={`h-8 w-8 rounded-lg text-sm font-medium shadow-sm transition ${
              page === pageNumber
                ? "bg-[#001069] text-white"
                : "border border-black/10 bg-white text-black hover:shadow-md"
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onPageChange(Math.min(pageCount, page + 1))}
          disabled={page >= pageCount}
          className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm font-medium text-black shadow-sm transition hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
}

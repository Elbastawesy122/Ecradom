"use client";

import { Download, Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";

import type { PurchaseRecord } from "@/types/my-coins";

interface PurchaseHistoryTableProps {
  purchases: PurchaseRecord[];
}

export default function PurchaseHistoryTable({ purchases }: PurchaseHistoryTableProps) {
  const [search, setSearch] = useState("");
  const [filterActive, setFilterActive] = useState(false);
  const [page, setPage] = useState(1);

  const filteredPurchases = useMemo(
    () =>
      purchases.filter((purchase) =>
        purchase.package.toLowerCase().includes(search.trim().toLowerCase()),
      ),
    [purchases, search],
  );

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-lg font-semibold text-black">Purchase History</h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search..."
              className="w-full rounded-lg border border-black/10 bg-white py-2 pl-9 pr-3 text-sm text-black placeholder:text-gray-400 focus:outline-none sm:w-48"
            />
          </div>

          <button
            type="button"
            onClick={() => setFilterActive((prev) => !prev)}
            aria-pressed={filterActive}
            className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium shadow-sm transition ${
              filterActive
                ? "border-[#001069] bg-[#001069]/5 text-[#001069]"
                : "border-black/10 bg-white text-black"
            }`}
          >
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#001069] text-white">
              <th className="rounded-l-lg px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Package</th>
              <th className="px-4 py-3 font-medium">Coins</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="rounded-r-lg px-4 py-3 font-medium">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {filteredPurchases.map((purchase) => (
              <tr
                key={`${purchase.date}-${purchase.package}`}
                className="border-b border-black/5 last:border-none"
              >
                <td className="px-4 py-4 text-gray-500">{purchase.date}</td>
                <td className="px-4 py-4 font-medium text-black">{purchase.package}</td>
                <td className="px-4 py-4 font-medium text-green-600">+{purchase.coins}</td>
                <td className="px-4 py-4 text-gray-500">{purchase.amount}</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                    {purchase.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#FF8414] transition hover:underline"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500">
          Showing {filteredPurchases.length} of {purchases.length}
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm font-medium text-black shadow-sm transition hover:shadow-md"
          >
            Previous
          </button>
          {[1, 2].map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              onClick={() => setPage(pageNumber)}
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
            onClick={() => setPage((prev) => Math.min(2, prev + 1))}
            className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm font-medium text-black shadow-sm transition hover:shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

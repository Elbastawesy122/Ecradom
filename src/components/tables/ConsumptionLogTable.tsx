"use client";

import { Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";

import type { ConsumptionRecord } from "@/types/my-coins";

interface ConsumptionLogTableProps {
  records: ConsumptionRecord[];
}

export default function ConsumptionLogTable({ records }: ConsumptionLogTableProps) {
  const [search, setSearch] = useState("");
  const [filterActive, setFilterActive] = useState(false);

  const filteredRecords = useMemo(
    () =>
      records.filter((record) => record.action.toLowerCase().includes(search.trim().toLowerCase())),
    [records, search],
  );

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-lg font-semibold text-black">Coins Consumption Log</h2>

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
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#001069] text-white">
              <th className="rounded-l-lg px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Action</th>
              <th className="px-4 py-3 font-medium">Coins</th>
              <th className="rounded-r-lg px-4 py-3 font-medium">Balance After</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record) => (
              <tr
                key={`${record.date}-${record.action}`}
                className="border-b border-black/5 last:border-none"
              >
                <td className="px-4 py-4 text-gray-500">{record.date}</td>
                <td className="px-4 py-4 font-medium text-black">{record.action}</td>
                <td
                  className={`px-4 py-4 font-medium ${
                    record.coins >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {record.coins >= 0 ? `+${record.coins}` : record.coins}
                </td>
                <td className="px-4 py-4 text-gray-500">{record.balanceAfter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

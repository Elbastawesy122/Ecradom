"use client";

import { Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";

import type { Exam, ExamStatus } from "@/types/exams";

interface ExamTableProps {
  exams: Exam[];
}

const STATUS_STYLES: Record<ExamStatus, string> = {
  Published: "bg-[#4577EF]/10 text-[#4577EF]",
  Draft: "bg-gray-100 text-gray-500",
  Closed: "bg-[#001069]/10 text-[#001069]",
};

const STATUS_OPTIONS: ExamStatus[] = ["Published", "Draft", "Closed"];

export default function ExamTable({ exams }: ExamTableProps) {
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<ExamStatus | null>(null);
  const [page, setPage] = useState(1);

  const filteredExams = useMemo(() => {
    const query = search.trim().toLowerCase();
    return exams.filter((exam) => {
      const matchesQuery =
        !query ||
        exam.name.toLowerCase().includes(query) ||
        exam.subject.toLowerCase().includes(query);
      const matchesStatus = !statusFilter || exam.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [exams, search, statusFilter]);

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-lg font-semibold text-black">All Exams</h2>

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

          <div className="relative">
            <button
              type="button"
              onClick={() => setFilterOpen((prev) => !prev)}
              aria-pressed={filterOpen}
              className={`flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium shadow-sm transition ${
                filterOpen || statusFilter
                  ? "border-[#001069] bg-[#001069]/5 text-[#001069]"
                  : "border-black/10 bg-white text-black"
              }`}
            >
              <Filter className="h-4 w-4" />
              Filter
            </button>

            {filterOpen ? (
              <div className="absolute right-0 top-full z-10 mt-2 w-40 rounded-lg border border-black/10 bg-white p-2 shadow-md">
                <button
                  type="button"
                  onClick={() => {
                    setStatusFilter(null);
                    setFilterOpen(false);
                  }}
                  className={`w-full rounded-md px-3 py-1.5 text-left text-sm ${
                    !statusFilter ? "bg-[#001069]/5 text-[#001069]" : "text-black hover:bg-gray-50"
                  }`}
                >
                  All
                </button>
                {STATUS_OPTIONS.map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => {
                      setStatusFilter(status);
                      setFilterOpen(false);
                    }}
                    className={`w-full rounded-md px-3 py-1.5 text-left text-sm ${
                      statusFilter === status
                        ? "bg-[#001069]/5 text-[#001069]"
                        : "text-black hover:bg-gray-50"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#001069] text-white">
              <th className="rounded-l-lg px-4 py-3 font-medium">Exam Name</th>
              <th className="px-4 py-3 font-medium">Subject</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Duration</th>
              <th className="px-4 py-3 font-medium">Max Grade</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Students</th>
              <th className="rounded-r-lg px-4 py-3 font-medium">Avg Grade</th>
            </tr>
          </thead>
          <tbody>
            {filteredExams.map((exam) => (
              <tr key={exam.name} className="border-b border-black/5 last:border-none">
                <td className="px-4 py-4 font-medium text-black">{exam.name}</td>
                <td className="px-4 py-4 text-gray-500">{exam.subject}</td>
                <td className="px-4 py-4 text-gray-500">{exam.date}</td>
                <td className="px-4 py-4 text-gray-500">{exam.duration}</td>
                <td className="px-4 py-4 text-gray-500">{exam.maxGrade}</td>
                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${STATUS_STYLES[exam.status]}`}
                  >
                    {exam.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-500">{exam.students}</td>
                <td className="px-4 py-4 text-gray-500">{exam.avgGrade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500">
          Showing {filteredExams.length} of {exams.length}
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

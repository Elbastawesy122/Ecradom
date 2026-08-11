"use client";

import { ChevronDown, Plus } from "lucide-react";
import { useState } from "react";

export default function AddAssignmentTrigger() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-black/5 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between gap-3 px-6 py-4 text-left"
      >
        <span className="flex items-center gap-3 text-sm font-semibold text-[#001069]">
          <Plus className="h-5 w-5 text-[#FF8414]" />
          Add New Assignment
        </span>
        <ChevronDown
          className={`h-5 w-5 text-[#001069] transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {expanded ? (
        <div className="grid grid-cols-1 gap-4 border-t border-black/5 px-6 py-5 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Task name"
            aria-label="Task name"
            className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            aria-label="Subject"
            className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none"
          />
          <input
            type="date"
            aria-label="Due date"
            className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Grade (e.g. 100 pts)"
            aria-label="Grade"
            className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none"
          />
          <div className="sm:col-span-2">
            <button
              type="button"
              className="rounded-lg bg-[#FF8414] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
            >
              Save Assignment
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

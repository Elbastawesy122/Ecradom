"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const TYPE_OPTIONS = ["PDF", "video", "article"] as const;

export default function MaterialTypeField() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const toggleOption = (option: string) => {
    setSelected((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-2xl bg-[#001069] px-6 py-4 text-left text-lg font-medium text-white shadow-sm"
      >
        Material type
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <div className="mt-6 flex flex-col gap-5">
        {TYPE_OPTIONS.map((option) => (
          <label
            key={option}
            className="flex items-center justify-between text-base font-medium text-black"
          >
            <span>{option}</span>
            <input
              type="checkbox"
              checked={Boolean(selected[option])}
              onChange={() => toggleOption(option)}
              className="h-6 w-6 rounded-md border-2 border-gray-300 accent-[#001069]"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

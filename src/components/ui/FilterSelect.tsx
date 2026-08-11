"use client";

import { ChevronDown } from "lucide-react";
import type { SelectHTMLAttributes } from "react";

interface FilterSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange"> {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  allLabel: string;
  className?: string;
}

export default function FilterSelect({
  value,
  onChange,
  options,
  allLabel,
  className = "",
  ...props
}: FilterSelectProps) {
  return (
    <div className={`relative ${className}`}>
      <select
        {...props}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full appearance-none rounded-lg border border-black/10 bg-white py-2.5 pl-3 pr-9 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#001069]/20"
      >
        <option value="">{allLabel}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    </div>
  );
}

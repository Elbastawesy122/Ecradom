import { ChevronDown } from "lucide-react";
import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  placeholder: string;
}

export default function Select({ label, options, placeholder, id, required, className = "", ...props }: SelectProps) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-black">
        {label}
        {required ? <span className="text-[#FF8414]"> *</span> : null}
      </span>
      <div className="relative">
        <select
          id={id}
          required={required}
          defaultValue=""
          className={`w-full appearance-none rounded-lg border border-black/10 bg-white px-4 py-2.5 pr-9 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#001069]/20 ${className}`}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div>
    </label>
  );
}

import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
}

export default function Input({ label, hint, id, required, className = "", ...props }: InputProps) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-black">
        {label}
        {required ? <span className="text-[#FF8414]"> *</span> : null}
      </span>
      <input
        id={id}
        required={required}
        className={`w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#001069]/20 ${className}`}
        {...props}
      />
      {hint ? <span className="text-xs text-gray-400">{hint}</span> : null}
    </label>
  );
}

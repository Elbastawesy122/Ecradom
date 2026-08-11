"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import type { InputHTMLAttributes } from "react";

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export default function PasswordInput({ label, id, required, className = "", ...props }: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-black">
        {label}
        {required ? <span className="text-[#FF8414]"> *</span> : null}
      </span>
      <div className="relative">
        <input
          id={id}
          required={required}
          type={visible ? "text" : "password"}
          className={`w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 pr-11 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#001069]/20 ${className}`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((prev) => !prev)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#001069]"
        >
          {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    </label>
  );
}

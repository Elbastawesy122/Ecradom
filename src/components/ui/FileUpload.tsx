"use client";

import { Upload } from "lucide-react";
import { useId, useState } from "react";

interface FileUploadProps {
  label: string;
  hint: string;
  accept?: string;
  compact?: boolean;
}

export default function FileUpload({ label, hint, accept = "image/png,image/jpeg", compact = false }: FileUploadProps) {
  const inputId = useId();
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <label
      htmlFor={inputId}
      className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-black/15 bg-[#F9F9FB] text-center transition hover:border-[#001069]/30 ${
        compact ? "aspect-square w-full max-w-[180px] px-4 py-4" : "px-4 py-8"
      }`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF8414]/10 text-[#FF8414]">
        <Upload className="h-5 w-5" />
      </span>
      <span className="text-sm font-semibold text-[#001069]">Click to upload</span>
      <span className="text-sm text-black">{label}</span>
      <span className="text-xs text-gray-400">{fileName ?? hint}</span>
      <input
        id={inputId}
        type="file"
        accept={accept}
        className="sr-only"
        onChange={(event) => setFileName(event.target.files?.[0]?.name ?? null)}
      />
    </label>
  );
}

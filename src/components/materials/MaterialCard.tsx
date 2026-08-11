import type { MaterialItem } from "@/types/material";

export default function MaterialCard({ name, date }: MaterialItem) {
  return (
    <div className="rounded-xl border border-black/5 bg-white px-4 py-3 text-center shadow-sm">
      <p className="text-sm font-medium text-black">{name}</p>
      <p className="mt-1 text-xs text-gray-400">{date}</p>
    </div>
  );
}

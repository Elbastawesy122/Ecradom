import type { LucideIcon } from "lucide-react";

import MaterialCard from "@/components/materials/MaterialCard";
import type { MaterialItem } from "@/types/material";

interface MaterialColumnProps {
  icon: LucideIcon;
  label: string;
  items: MaterialItem[];
}

export default function MaterialColumn({ icon: Icon, label, items }: MaterialColumnProps) {
  return (
    <div className="flex flex-col items-center">
      <Icon className="h-10 w-10 text-black" aria-label={label} />

      <div className="mt-6 flex w-full flex-col gap-3">
        {items.map((item) => (
          <MaterialCard key={item.name} name={item.name} date={item.date} />
        ))}
      </div>

      <div className="mt-4 flex w-full flex-col gap-3">
        <button
          type="button"
          className="w-full rounded-lg bg-[#FF8414] py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
        >
          Download
        </button>
        <button
          type="button"
          className="w-full rounded-lg bg-[#001069] py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
        >
          View
        </button>
      </div>
    </div>
  );
}

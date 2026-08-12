import { ChevronRight } from "lucide-react";

import type { SettingsItem } from "@/types/settings";
import type { StatAccent } from "@/types/dashboard";

const ACCENT_CLASSES: Record<StatAccent, string> = {
  navy: "bg-[#001069]/10 text-[#001069]",
  orange: "bg-[#FF8414]/10 text-[#FF8414]",
  blue: "bg-[#4577EF]/10 text-[#4577EF]",
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
  purple: "bg-purple-100 text-purple-600",
};

export default function SettingsCard({ title, description, icon: Icon, accent }: SettingsItem) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-4 rounded-2xl border border-black/5 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-black/10 hover:shadow-md"
    >
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${ACCENT_CLASSES[accent]}`}>
        <Icon className="h-6 w-6" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold text-black">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-gray-300" />
    </button>
  );
}

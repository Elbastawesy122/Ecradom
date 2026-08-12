import type { PerformanceStat } from "@/types/evaluation";

const ACCENT_CLASSES: Record<PerformanceStat["accent"], string> = {
  navy: "bg-white/10 text-white",
  orange: "bg-[#FF8414]/20 text-[#FF8414]",
  blue: "bg-[#4577EF]/20 text-[#4577EF]",
  green: "bg-green-400/15 text-green-300",
  red: "bg-red-400/15 text-red-300",
  purple: "bg-purple-400/15 text-purple-300",
};

export default function StatTile({ icon: Icon, value, label, accent, delta }: PerformanceStat) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#001069] p-5 shadow-sm">
      {delta ? (
        <span className="absolute right-4 top-4 rounded-full bg-green-400/15 px-2 py-0.5 text-xs font-medium text-green-300">
          {delta}
        </span>
      ) : null}
      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${ACCENT_CLASSES[accent]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-sm text-white/60">{label}</p>
    </div>
  );
}

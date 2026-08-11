import type { StatAccent, StatCardData } from "@/types/dashboard";

const ACCENT_CLASSES: Record<StatAccent, string> = {
  navy: "bg-[#001069]/10 text-[#001069]",
  orange: "bg-[#FF8414]/10 text-[#FF8414]",
  blue: "bg-[#4577EF]/10 text-[#4577EF]",
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
  purple: "bg-purple-100 text-purple-600",
};

export default function StatCard({ icon: Icon, value, label, accent, delta, badge }: StatCardData) {
  return (
    <div className="relative rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
      {badge ? (
        <span className="absolute right-4 top-4 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-600">
          {badge}
        </span>
      ) : null}
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${ACCENT_CLASSES[accent]}`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-2xl font-bold text-black">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
      {delta ? <p className="mt-2 text-xs text-gray-400">{delta}</p> : null}
    </div>
  );
}

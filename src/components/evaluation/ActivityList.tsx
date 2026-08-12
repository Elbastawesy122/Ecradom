import type { ActivityItem, ActivityResultTone } from "@/types/evaluation";

const TONE_CLASSES: Record<ActivityResultTone, string> = {
  orange: "bg-[#FF8414]/20 text-[#FF8414]",
  blue: "bg-[#4577EF]/20 text-[#4577EF]",
  green: "bg-green-400/15 text-green-300",
  navy: "bg-white/10 text-white",
};

interface ActivityListProps {
  activities: ActivityItem[];
}

export default function ActivityList({ activities }: ActivityListProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#001069] p-6 shadow-sm sm:p-8">
      <h3 className="text-lg font-semibold text-white">Recent Activities</h3>

      <ul className="mt-4 flex flex-col">
        {activities.map((activity, index) => (
          <li
            key={activity.title}
            className={`flex items-center gap-4 py-4 ${index !== activities.length - 1 ? "border-b border-white/10" : ""}`}
          >
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${TONE_CLASSES[activity.resultTone]}`}>
              <activity.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">{activity.title}</p>
              <p className="mt-0.5 text-xs text-white/50">{activity.time}</p>
            </div>
            <span className="shrink-0 text-sm font-semibold text-white/80">{activity.result}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

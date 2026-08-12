import { getInitials } from "@/components/ui/Avatar";
import type { EvaluationStudent } from "@/types/evaluation";

interface SummaryCardProps {
  student: EvaluationStudent;
}

const STATS: { key: keyof EvaluationStudent; label: string; suffix?: string }[] = [
  { key: "courses", label: "Courses" },
  { key: "examsDone", label: "Exams done" },
  { key: "tasksDone", label: "Tasks done" },
  { key: "attendance", label: "Attendance", suffix: "%" },
];

export default function SummaryCard({ student }: SummaryCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#001069] p-6 text-white shadow-sm sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FF8414] text-lg font-semibold text-white">
            {getInitials(student.name)}
          </span>
          <div>
            <h2 className="text-xl font-semibold text-white">{student.name}</h2>
            <p className="mt-1 text-sm text-white/60">Student Code: {student.code}</p>
            <p className="mt-0.5 text-sm text-white/60">{student.track}</p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 sm:items-end">
          <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs font-medium text-green-300">
            {student.status}
          </span>
          <span className="text-xs text-white/50">Joined {student.joined}</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 pt-6 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="px-2 text-center first:pl-0 sm:px-4">
            <p className="text-2xl font-bold text-white">
              {student[stat.key]}
              {stat.suffix ?? ""}
            </p>
            <p className="mt-1 text-xs text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

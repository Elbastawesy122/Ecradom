import CircularProgress from "@/components/ui/CircularProgress";
import ProgressBar from "@/components/ui/ProgressBar";
import type { OverallPerformance } from "@/types/evaluation";

interface OverallPerformanceCardProps {
  performance: OverallPerformance;
}

export default function OverallPerformanceCard({ performance }: OverallPerformanceCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#001069] p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-white">Overall Performance</h3>

      <div className="mt-6">
        <CircularProgress value={performance.overall} label={`${performance.overall}%`} sublabel="Overall" />
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <ProgressBar label="Exams" value={performance.exams} tone="orange" />
        <ProgressBar label="Tasks" value={performance.tasks} tone="blue" />
        <ProgressBar label="Attendance" value={performance.attendance} tone="orange" />
      </div>
    </div>
  );
}

import type { TeacherStatus } from "@/types/teachers";

const STATUS_CLASSES: Record<TeacherStatus, string> = {
  Active: "bg-green-100 text-green-600",
  Suspended: "bg-red-100 text-red-600",
};

interface StatusBadgeProps {
  status: TeacherStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${STATUS_CLASSES[status]}`}>{status}</span>
  );
}

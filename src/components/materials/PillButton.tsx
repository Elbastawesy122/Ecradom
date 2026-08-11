import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface PillButtonProps {
  icon: LucideIcon;
  iconClassName?: string;
  children: ReactNode;
  className?: string;
}

export default function PillButton({
  icon: Icon,
  iconClassName = "text-black",
  children,
  className = "",
}: PillButtonProps) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-sm transition hover:shadow-md ${className}`}
    >
      <Icon className={`h-4 w-4 ${iconClassName}`} />
      {children}
    </button>
  );
}

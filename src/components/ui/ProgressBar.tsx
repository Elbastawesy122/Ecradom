export type ProgressBarTone = "orange" | "navy" | "blue";

const TONE_CLASSES: Record<ProgressBarTone, string> = {
  orange: "bg-[#FF8414]",
  navy: "bg-[#001069]",
  blue: "bg-[#4577EF]",
};

interface ProgressBarProps {
  label: string;
  value: number;
  tone?: ProgressBarTone;
  trackClassName?: string;
  labelClassName?: string;
}

export default function ProgressBar({
  label,
  value,
  tone = "orange",
  trackClassName = "bg-white/10",
  labelClassName = "text-white/80",
}: ProgressBarProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className={`flex items-center justify-between text-sm ${labelClassName}`}>
        <span>{label}</span>
        <span className="font-semibold">{value}%</span>
      </div>
      <div className={`h-2 w-full overflow-hidden rounded-full ${trackClassName}`}>
        <div className={`h-full rounded-full ${TONE_CLASSES[tone]}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

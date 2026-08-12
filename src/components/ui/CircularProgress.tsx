interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  trackClassName?: string;
  progressClassName?: string;
  label: string;
  labelClassName?: string;
  sublabel?: string;
  sublabelClassName?: string;
}

export default function CircularProgress({
  value,
  size = 160,
  strokeWidth = 12,
  trackClassName = "stroke-white/10",
  progressClassName = "stroke-[#FF8414]",
  label,
  labelClassName = "fill-white",
  sublabel,
  sublabelClassName = "fill-white/60",
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);
  const center = size / 2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      <circle cx={center} cy={center} r={radius} strokeWidth={strokeWidth} fill="none" className={trackClassName} />
      <circle
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${center} ${center})`}
        className={`${progressClassName} transition-[stroke-dashoffset] duration-500`}
      />
      <text x="50%" y="48%" textAnchor="middle" dominantBaseline="middle" className={`text-2xl font-bold ${labelClassName}`}>
        {label}
      </text>
      {sublabel ? (
        <text x="50%" y="63%" textAnchor="middle" dominantBaseline="middle" className={`text-xs ${sublabelClassName}`}>
          {sublabel}
        </text>
      ) : null}
    </svg>
  );
}

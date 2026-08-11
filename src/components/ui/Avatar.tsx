export type AvatarAccent = "orange" | "navy";

const ACCENT_CLASSES: Record<AvatarAccent, string> = {
  orange: "bg-[#FF8414]/10 text-[#FF8414]",
  navy: "bg-[#001069]/10 text-[#001069]",
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const initials = parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : parts[0].slice(0, 2);
  return initials.toUpperCase();
}

interface AvatarProps {
  name: string;
  accent?: AvatarAccent;
}

export default function Avatar({ name, accent = "orange" }: AvatarProps) {
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${ACCENT_CLASSES[accent]}`}
      aria-hidden="true"
    >
      {getInitials(name)}
    </span>
  );
}

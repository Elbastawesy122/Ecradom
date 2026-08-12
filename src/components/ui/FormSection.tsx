import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type FormSectionAccent = "navy" | "orange";

const ACCENT_CLASSES: Record<FormSectionAccent, string> = {
  navy: "bg-[#001069]/10 text-[#001069]",
  orange: "bg-[#FF8414]/10 text-[#FF8414]",
};

interface FormSectionProps {
  title: string;
  icon?: LucideIcon;
  accent?: FormSectionAccent;
  children: ReactNode;
}

export default function FormSection({ title, icon: Icon, accent = "navy", children }: FormSectionProps) {
  return (
    <section className="border-t border-black/5 px-6 py-6 first:border-t-0 sm:px-8">
      <div className="flex items-center gap-2.5">
        {Icon ? (
          <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${ACCENT_CLASSES[accent]}`}>
            <Icon className="h-3.5 w-3.5" />
          </span>
        ) : null}
        <h3 className="text-xs font-semibold tracking-wide text-[#001069]">{title}</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
    </section>
  );
}

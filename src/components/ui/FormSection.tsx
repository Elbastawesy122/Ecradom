import type { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

export default function FormSection({ title, children }: FormSectionProps) {
  return (
    <section className="border-t border-black/5 px-6 py-6 first:border-t-0 sm:px-8">
      <h3 className="text-xs font-semibold tracking-wide text-[#001069]">{title}</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
    </section>
  );
}

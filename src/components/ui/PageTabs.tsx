import Link from "next/link";

export interface PageTabItem {
  label: string;
  href: string;
  active: boolean;
}

interface PageTabsProps {
  items: PageTabItem[];
}

export default function PageTabs({ items }: PageTabsProps) {
  return (
    <div className="flex w-full flex-wrap gap-2 rounded-xl border border-black/5 bg-white p-1.5 shadow-sm sm:inline-flex sm:w-auto">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          aria-current={item.active ? "page" : undefined}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            item.active ? "bg-[#001069] text-white" : "text-gray-500 hover:text-[#001069]"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

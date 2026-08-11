import type { ListItem } from "@/types/dashboard";

interface ListCardProps {
  title: string;
  items: ListItem[];
}

export default function ListCard({ title, items }: ListCardProps) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <ul className="mt-4 flex flex-col gap-4">
        {items.map((item) => (
          <li key={item.label} className="flex items-center justify-between gap-4 text-sm">
            <span className="text-black">{item.label}</span>
            <span className="shrink-0 text-gray-400">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

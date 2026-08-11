"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import type { StatusBreakdownPoint } from "@/types/coins-distribution";

const STATUS_COLORS: Record<StatusBreakdownPoint["name"], string> = {
  Completed: "#22C55E",
  Failed: "#EF4444",
};

interface StatusBreakdownChartProps {
  data: StatusBreakdownPoint[];
}

export default function StatusBreakdownChart({ data }: StatusBreakdownChartProps) {
  return (
    <div>
      <div className="h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="65%"
              outerRadius="90%"
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={STATUS_COLORS[entry.name]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.05)" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-center justify-center gap-6 text-sm">
        {data.map((entry) => (
          <span key={entry.name} className="flex items-center gap-2 text-black">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: STATUS_COLORS[entry.name] }}
            />
            {entry.name}
          </span>
        ))}
      </div>
    </div>
  );
}

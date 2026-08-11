"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import type { ExamCoinsPoint } from "@/types/coins-distribution";

interface CoinsDistributionChartProps {
  data: ExamCoinsPoint[];
}

export default function CoinsDistributionChart({ data }: CoinsDistributionChartProps) {
  return (
    <div className="h-72 w-full sm:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 24, left: 8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#0010691a" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 600]}
            ticks={[0, 150, 300, 450, 600]}
            tick={{ fontSize: 12, fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="exam"
            width={140}
            tick={{ fontSize: 12, fill: "#111827" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(0,16,105,0.04)" }}
            contentStyle={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.05)" }}
          />
          <Bar dataKey="coins" fill="#FF8414" radius={[0, 8, 8, 0]} barSize={22} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

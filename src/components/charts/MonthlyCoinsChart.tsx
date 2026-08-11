"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import type { MonthlyCoinsPoint } from "@/types/my-coins";

interface MonthlyCoinsChartProps {
  data: MonthlyCoinsPoint[];
}

export default function MonthlyCoinsChart({ data }: MonthlyCoinsChartProps) {
  return (
    <div className="h-72 w-full sm:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="monthlyCoinsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF8414" stopOpacity={0.18} />
              <stop offset="100%" stopColor="#FF8414" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#0010691a" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.05)" }} />
          <Area
            type="monotone"
            dataKey="coins"
            stroke="#001069"
            strokeWidth={2.5}
            strokeLinecap="round"
            fill="url(#monthlyCoinsFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

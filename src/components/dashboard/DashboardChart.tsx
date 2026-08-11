"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { ChartPoint } from "@/types/dashboard";

interface DashboardChartProps {
  data: ChartPoint[];
}

export default function DashboardChart({ data }: DashboardChartProps) {
  return (
    <div className="h-72 w-full sm:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#0010691a" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.05)" }} />
          <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: 12 }} />
          <Line
            type="monotone"
            dataKey="users"
            name="Users"
            stroke="#001069"
            strokeWidth={2.5}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="materials"
            name="Materials"
            stroke="#FF8414"
            strokeWidth={2.5}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="exams"
            name="Exams"
            stroke="#4577EF"
            strokeWidth={2.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

"use client";

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import type { EvaluationChartPoint } from "@/types/evaluation";

interface PerformanceTrendChartProps {
  data: EvaluationChartPoint[];
}

export default function PerformanceTrendChart({ data }: PerformanceTrendChartProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#001069] p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">Performance Trend</h3>
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
          last year
        </span>
      </div>

      <div className="mt-4 h-72 w-full sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff1a" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#ffffff99" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: "#ffffff99" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "#001069",
                color: "#fff",
              }}
            />
            <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: 12, color: "#ffffffcc" }} />
            <Line type="monotone" dataKey="exams" name="Exams" stroke="#FF8414" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="tasks" name="Tasks" stroke="#8AA4FF" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="attendance" name="Attendance" stroke="#4577EF" strokeWidth={2.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

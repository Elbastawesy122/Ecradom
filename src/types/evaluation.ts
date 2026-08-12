import type { LucideIcon } from "lucide-react";

import type { StatAccent } from "@/types/dashboard";

export interface EvaluationStudent {
  name: string;
  code: string;
  track: string;
  status: "Active" | "Suspended";
  joined: string;
  courses: number;
  examsDone: number;
  tasksDone: number;
  attendance: number;
}

export interface PerformanceStat {
  label: string;
  value: string;
  icon: LucideIcon;
  accent: StatAccent;
  delta?: string;
}

export interface EvaluationChartPoint {
  month: string;
  exams: number;
  tasks: number;
  attendance: number;
}

export type ActivityResultTone = "orange" | "blue" | "green" | "navy";

export interface ActivityItem {
  icon: LucideIcon;
  title: string;
  result: string;
  resultTone: ActivityResultTone;
  time: string;
}

export interface OverallPerformance {
  overall: number;
  exams: number;
  tasks: number;
  attendance: number;
}

export type EvaluationGrade = "Poor" | "Average" | "Good" | "Excellent";

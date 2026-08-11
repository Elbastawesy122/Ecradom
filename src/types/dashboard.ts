import type { LucideIcon } from "lucide-react";

export type StatAccent = "navy" | "orange" | "blue" | "green" | "red" | "purple";

export interface StatCardData {
  icon: LucideIcon;
  value: string;
  label: string;
  accent: StatAccent;
  delta?: string;
  badge?: string;
}

export interface ChartPoint {
  month: string;
  users: number;
  materials: number;
  exams: number;
}

export interface ListItem {
  label: string;
  value: string;
}

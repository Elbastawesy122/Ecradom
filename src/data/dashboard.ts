import { BookOpen, Coins, GraduationCap, ListChecks, Users } from "lucide-react";

import type { ChartPoint, ListItem, StatCardData } from "@/types/dashboard";

export const statCards: StatCardData[] = [
  { icon: Users, value: "12,480", label: "Total Users", delta: "+8% this month", accent: "navy" },
  { icon: BookOpen, value: "1,240", label: "Materials", delta: "+4% this month", accent: "orange" },
  { icon: GraduationCap, value: "86", label: "Exams", delta: "+2 this week", accent: "navy" },
  { icon: ListChecks, value: "312", label: "Assignments", delta: "+15 this week", accent: "orange" },
  { icon: Coins, value: "48.9k", label: "Coins Distributed", delta: "+1.2k this week", accent: "navy" },
];

export const chartData: ChartPoint[] = [
  { month: "Jan", users: 400, materials: 240, exams: 180 },
  { month: "Feb", users: 620, materials: 300, exams: 210 },
  { month: "Mar", users: 780, materials: 360, exams: 260 },
  { month: "Apr", users: 900, materials: 420, exams: 300 },
  { month: "May", users: 1100, materials: 480, exams: 340 },
  { month: "Jun", users: 1320, materials: 540, exams: 390 },
];

export const recentActivity: ListItem[] = [
  { label: 'New material "UIUX" uploaded', value: "2h ago" },
  { label: 'Exam "Python Basics" completed by 42 students', value: "5h ago" },
  { label: "50 coins distributed to top learners", value: "1d ago" },
  { label: 'New assignment "Front end" published', value: "1d ago" },
  { label: "18 new users joined", value: "2d ago" },
];

export const topMaterials: ListItem[] = [
  { label: "Programming", value: "1.2k views" },
  { label: "UIUX", value: "980 views" },
  { label: "Python", value: "860 views" },
  { label: "Front end", value: "740 views" },
  { label: "English", value: "610 views" },
];

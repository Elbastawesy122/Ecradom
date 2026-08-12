import {
  Award,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Coins,
  FileCheck2,
  ListChecks,
  PlayCircle,
  UploadCloud,
} from "lucide-react";

import type {
  ActivityItem,
  EvaluationChartPoint,
  EvaluationStudent,
  OverallPerformance,
  PerformanceStat,
} from "@/types/evaluation";

export const evaluationStudent: EvaluationStudent = {
  name: "Omar Khalid",
  code: "STU-2025-0042",
  track: "Level 3 — Programming Track",
  status: "Active",
  joined: "Mar 2025",
  courses: 5,
  examsDone: 3,
  tasksDone: 8,
  attendance: 97,
};

export const performanceStats: PerformanceStat[] = [
  { label: "Attendance Rate", value: "97%", icon: CalendarCheck, accent: "green", delta: "+2%" },
  { label: "Content Completion", value: "84%", icon: BookOpen, accent: "blue" },
  { label: "Exam Average", value: "82%", icon: Award, accent: "orange", delta: "+6%" },
  { label: "Task Average", value: "90%", icon: ListChecks, accent: "navy" },
  { label: "Exams Completed", value: "3", icon: FileCheck2, accent: "blue" },
  { label: "Tasks Completed", value: "8", icon: CheckCircle2, accent: "green" },
];

export const evaluationChartData: EvaluationChartPoint[] = [
  { month: "Jan", exams: 68, tasks: 74, attendance: 90 },
  { month: "Feb", exams: 72, tasks: 78, attendance: 92 },
  { month: "Mar", exams: 70, tasks: 80, attendance: 94 },
  { month: "Apr", exams: 75, tasks: 84, attendance: 93 },
  { month: "May", exams: 79, tasks: 86, attendance: 95 },
  { month: "Jun", exams: 80, tasks: 88, attendance: 96 },
  { month: "Jul", exams: 82, tasks: 90, attendance: 97 },
];

export const recentActivities: ActivityItem[] = [
  {
    icon: FileCheck2,
    title: "Completed Programming Midterm",
    result: "88/100",
    resultTone: "orange",
    time: "2h ago",
  },
  {
    icon: UploadCloud,
    title: "Submitted React Fundamentals assignment",
    result: "94/100",
    resultTone: "blue",
    time: "1d ago",
  },
  {
    icon: PlayCircle,
    title: "Attended UIUX live session",
    result: "Completed",
    resultTone: "green",
    time: "2d ago",
  },
  {
    icon: Coins,
    title: "Earned 10 bonus coins",
    result: "+10",
    resultTone: "orange",
    time: "3d ago",
  },
  {
    icon: BookOpen,
    title: "Completed Geometry module",
    result: "85%",
    resultTone: "navy",
    time: "4d ago",
  },
];

export const overallPerformance: OverallPerformance = {
  overall: 87,
  exams: 82,
  tasks: 90,
  attendance: 97,
};

export const initialStrengths: string[] = [
  "Problem solving",
  "Creative thinking",
  "Consistent attendance",
  "Fast learner",
];

export const initialImprovements: string[] = ["Class participation", "Time management", "Written expression"];

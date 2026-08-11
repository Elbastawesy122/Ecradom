import { Award, CheckCircle, ClipboardList, Users } from "lucide-react";

import type { StatCardData } from "@/types/dashboard";
import type { Exam } from "@/types/exams";

export const examStats: StatCardData[] = [
  { icon: ClipboardList, value: "4", label: "Total Exams", accent: "orange" },
  { icon: CheckCircle, value: "1", label: "Published", accent: "green" },
  { icon: Users, value: "80", label: "Total Students", accent: "blue" },
  { icon: Award, value: "53%", label: "Avg Grade", accent: "purple" },
];

export const exams: Exam[] = [
  {
    name: "Programming Midterm",
    subject: "Programming",
    date: "2025-07-09",
    duration: "60 min",
    maxGrade: "100 pts",
    status: "Published",
    students: 42,
    avgGrade: "74%",
  },
  {
    name: "UIUX Final",
    subject: "UIUX",
    date: "2025-07-20",
    duration: "90 min",
    maxGrade: "100 pts",
    status: "Draft",
    students: 0,
    avgGrade: "—",
  },
  {
    name: "Geometry Quiz",
    subject: "Geometry",
    date: "2025-07-05",
    duration: "45 min",
    maxGrade: "50 pts",
    status: "Closed",
    students: 38,
    avgGrade: "31%",
  },
  {
    name: "Algebra Final",
    subject: "Mathematics",
    date: "2025-07-15",
    duration: "120 min",
    maxGrade: "100 pts",
    status: "Draft",
    students: 0,
    avgGrade: "—",
  },
];

import { AlertCircle, Award, CheckCircle, ClipboardList } from "lucide-react";

import type { StatCardData } from "@/types/dashboard";
import type { Assignment } from "@/types/assignments";

export const assignmentStats: StatCardData[] = [
  { icon: ClipboardList, value: "5", label: "Total Assignments", accent: "orange" },
  { icon: CheckCircle, value: "3", label: "Active", accent: "green" },
  { icon: Award, value: "1", label: "Submitted", accent: "blue" },
  { icon: AlertCircle, value: "1", label: "Overdue", accent: "red" },
];

export const assignments: Assignment[] = [
  {
    name: "React Fundamentals",
    subject: "Programming",
    dueDate: "2025-07-15",
    grade: "100 pts",
    status: "Active",
  },
  {
    name: "UI Design Principles",
    subject: "UIUX",
    dueDate: "2025-07-20",
    grade: "50 pts",
    status: "Active",
  },
  {
    name: "Geometry Set A",
    subject: "Geometry",
    dueDate: "2025-07-08",
    grade: "80 pts",
    status: "Submitted",
  },
  {
    name: "Algebra Chapter 3",
    subject: "Mathematics",
    dueDate: "2025-07-01",
    grade: "60 pts",
    status: "Overdue",
  },
  {
    name: "Component Design",
    subject: "UIUX",
    dueDate: "2025-07-25",
    grade: "40 pts",
    status: "Active",
  },
];

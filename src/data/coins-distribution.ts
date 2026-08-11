import { AlertCircle, CheckCircle, Users, Zap } from "lucide-react";

import type { StatCardData } from "@/types/dashboard";
import type {
  DistributionOperation,
  ExamCoinsPoint,
  StatusBreakdownPoint,
} from "@/types/coins-distribution";

export const coinsStats: StatCardData[] = [
  { icon: Zap, value: "1,560", label: "Total Coins Distributed", accent: "orange", badge: "+12%" },
  { icon: Users, value: "156", label: "Eligible Students", accent: "blue" },
  { icon: CheckCircle, value: "3", label: "Successful Ops", accent: "green" },
  { icon: AlertCircle, value: "1", label: "Failed Ops", accent: "red" },
];

export const examCoinsData: ExamCoinsPoint[] = [
  { exam: "Programming Midterm", coins: 420 },
  { exam: "Geometry Quiz", coins: 380 },
  { exam: "Physics Lab", coins: 310 },
  { exam: "Algebra Midterm", coins: 450 },
];

export const statusBreakdownData: StatusBreakdownPoint[] = [
  { name: "Completed", value: 3 },
  { name: "Failed", value: 1 },
];

export const distributionOperations: DistributionOperation[] = [
  {
    exam: "Programming Midterm",
    date: "2025-07-09",
    eligibleStudents: 42,
    coinsSent: 420,
    status: "Completed",
  },
  {
    exam: "Geometry Quiz",
    date: "2025-07-05",
    eligibleStudents: 38,
    coinsSent: 380,
    status: "Completed",
  },
  {
    exam: "Physics Lab",
    date: "2025-07-03",
    eligibleStudents: 31,
    coinsSent: 310,
    status: "Failed",
  },
  {
    exam: "Algebra Midterm",
    date: "2025-06-28",
    eligibleStudents: 45,
    coinsSent: 450,
    status: "Completed",
  },
];

import { Activity, Calendar, Coins, Package } from "lucide-react";

import type { StatCardData } from "@/types/dashboard";
import type { ConsumptionRecord, MonthlyCoinsPoint, PurchaseRecord } from "@/types/my-coins";

export const CURRENT_BALANCE = 458;

export const summaryCards: StatCardData[] = [
  {
    icon: Package,
    value: "Pro 500",
    label: "Current Package",
    delta: "500 coins/month",
    accent: "blue",
  },
  { icon: Coins, value: "458", label: "Coins Remaining", accent: "orange", badge: "+42 used" },
  { icon: Calendar, value: "Aug 1, 2025", label: "Subscription Expires", accent: "navy" },
  { icon: Activity, value: "195 coins", label: "Avg Monthly Usage", accent: "blue" },
];

export const monthlyCoinsData: MonthlyCoinsPoint[] = [
  { month: "Jan", coins: 120 },
  { month: "Feb", coins: 180 },
  { month: "Mar", coins: 145 },
  { month: "Apr", coins: 195 },
  { month: "May", coins: 165 },
  { month: "Jun", coins: 220 },
];

export const purchaseHistory: PurchaseRecord[] = [
  { date: "2025-06-01", package: "Pro 500", coins: 500, amount: "$49.99", status: "Completed" },
  { date: "2025-05-01", package: "Pro 500", coins: 500, amount: "$49.99", status: "Completed" },
  { date: "2025-04-01", package: "Starter 200", coins: 200, amount: "$19.99", status: "Completed" },
];

export const consumptionLog: ConsumptionRecord[] = [
  { date: "2025-06-28", action: "Exam: Programming Midterm", coins: -42, balanceAfter: 458 },
  { date: "2025-06-15", action: "Task Correction: React Fundamentals", coins: -8, balanceAfter: 500 },
  { date: "2025-06-01", action: "Purchase: Pro 500", coins: 500, balanceAfter: 508 },
  { date: "2025-05-20", action: "Exam: Geometry Quiz", coins: -38, balanceAfter: 8 },
];

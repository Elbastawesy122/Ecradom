import { Bell, BookOpen, Coins, CreditCard, FileBarChart2, ShieldCheck } from "lucide-react";

import type { SettingsItem } from "@/types/settings";

export const settingsItems: SettingsItem[] = [
  {
    title: "Coin Packages",
    description: "Manage pricing and coin bundle tiers",
    icon: Coins,
    accent: "orange",
  },
  {
    title: "Subscriptions",
    description: "Configure teacher subscription plans",
    icon: CreditCard,
    accent: "purple",
  },
  {
    title: "Permissions",
    description: "Role-based access control rules",
    icon: ShieldCheck,
    accent: "blue",
  },
  {
    title: "Subjects",
    description: "Add or manage academic subjects",
    icon: BookOpen,
    accent: "green",
  },
  {
    title: "Notifications",
    description: "Platform-wide notification settings",
    icon: Bell,
    accent: "orange",
  },
  {
    title: "Reports",
    description: "Export data and generate reports",
    icon: FileBarChart2,
    accent: "navy",
  },
];

import type { LucideIcon } from "lucide-react";

import type { StatAccent } from "@/types/dashboard";

export interface SettingsItem {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: StatAccent;
}

import { FileText, Link2, Video } from "lucide-react";

import type { MaterialType } from "@/types/material";

export const MATERIAL_TYPE_ICONS: Record<MaterialType, typeof FileText> = {
  pdf: FileText,
  video: Video,
  link: Link2,
};

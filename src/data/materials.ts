import type {
  FilterOption,
  MaterialColumnData,
  MaterialItem,
  MaterialSummary,
} from "@/types/material";

const MATERIAL_ITEMS: MaterialItem[] = [
  { name: "Programming", date: "February 21, 2025" },
  { name: "Python", date: "February 24, 2025" },
  { name: "Front end", date: "February 28, 2025" },
  { name: "UIUX", date: "May 3, 2025" },
  { name: "English", date: "May 20, 2025" },
  { name: "Hasib aly", date: "May 23, 2025" },
];

export const filterOptions: FilterOption[] = [
  { type: "pdf", label: "PDF" },
  { type: "video", label: "video" },
  { type: "link", label: "link" },
];

export const materialColumns: MaterialColumnData[] = [
  { type: "pdf", label: "PDF", items: MATERIAL_ITEMS },
  { type: "video", label: "Video", items: MATERIAL_ITEMS },
  { type: "link", label: "Link", items: MATERIAL_ITEMS },
];

export const summaryCards: MaterialSummary[] = [
  {
    title: "UIUX",
    description:
      "We learned to design simple home pages with clean layout and colors based on the guidelines",
    progress: 90,
    attachments: 9,
    comments: 7,
  },
  {
    title: "Front end",
    description:
      "We learned to code simple home pages with clean layout and colors based on the instructions",
    progress: 78,
    attachments: 6,
    comments: 6,
  },
];

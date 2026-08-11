export type MaterialType = "pdf" | "video" | "link";

export interface MaterialItem {
  name: string;
  date: string;
}

export interface FilterOption {
  type: MaterialType;
  label: string;
}

export interface MaterialColumnData {
  type: MaterialType;
  label: string;
  items: MaterialItem[];
}

export interface MaterialSummary {
  title: string;
  description: string;
  progress: number;
  attachments: number;
  comments: number;
}

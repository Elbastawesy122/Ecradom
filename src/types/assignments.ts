export type AssignmentStatus = "Active" | "Submitted" | "Overdue";

export interface Assignment {
  name: string;
  subject: string;
  dueDate: string;
  grade: string;
  status: AssignmentStatus;
}

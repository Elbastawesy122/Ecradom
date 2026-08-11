export type ExamStatus = "Published" | "Draft" | "Closed";

export interface Exam {
  name: string;
  subject: string;
  date: string;
  duration: string;
  maxGrade: string;
  status: ExamStatus;
  students: number;
  avgGrade: string;
}

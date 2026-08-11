export type TeacherStatus = "Active" | "Suspended";

export interface Teacher {
  id: string;
  name: string;
  email: string;
  subject: string;
  level: string;
  students: number;
  experience: string;
  joined: string;
  status: TeacherStatus;
}

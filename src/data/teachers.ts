import type { Teacher } from "@/types/teachers";

export const teachers: Teacher[] = [
  {
    id: "1",
    name: "Ahmed Hassan",
    email: "ahmed.hassan@eduplatform.com",
    subject: "Programming",
    level: "University",
    students: 142,
    experience: "8 yrs",
    joined: "2025-01-15",
    status: "Active",
  },
  {
    id: "2",
    name: "Sarah Mitchell",
    email: "sarah.mitchell@eduplatform.com",
    subject: "Mathematics",
    level: "High School",
    students: 98,
    experience: "12 yrs",
    joined: "2025-02-10",
    status: "Active",
  },
  {
    id: "3",
    name: "Lena Torres",
    email: "lena.torres@eduplatform.com",
    subject: "UIUX",
    level: "University",
    students: 75,
    experience: "5 yrs",
    joined: "2025-01-22",
    status: "Suspended",
  },
  {
    id: "4",
    name: "Omar Khalid",
    email: "omar.khalid@eduplatform.com",
    subject: "Geometry",
    level: "Middle School",
    students: 63,
    experience: "7 yrs",
    joined: "2025-03-01",
    status: "Active",
  },
  {
    id: "5",
    name: "Nora Sayed",
    email: "nora.sayed@eduplatform.com",
    subject: "Physics",
    level: "High School",
    students: 51,
    experience: "4 yrs",
    joined: "2025-04-10",
    status: "Active",
  },
];

export const teacherSubjects: string[] = Array.from(new Set(teachers.map((teacher) => teacher.subject)));
export const teacherLevels: string[] = Array.from(new Set(teachers.map((teacher) => teacher.level)));

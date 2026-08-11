import type { Student } from "@/types/students";

export const students: Student[] = [
  {
    id: "1",
    name: "Yusuf Al-Amin",
    email: "yusuf.alamin@eduplatform.com",
    code: "STU-2025-0001",
    subject: "Programming",
    grade: "Grade 10",
    section: "A",
    guardianName: "Ali Al-Amin",
    guardianPhone: "+20 110 1234567",
    joined: "2025-03-18",
  },
  {
    id: "2",
    name: "Fatima Hassan",
    email: "fatima.hassan@eduplatform.com",
    code: "STU-2025-0002",
    subject: "Mathematics",
    grade: "Grade 11",
    section: "B",
    guardianName: "Hassan Ibrahim",
    guardianPhone: "+20 111 2345678",
    joined: "2025-03-20",
  },
  {
    id: "3",
    name: "Mohammed Ali",
    email: "mohammed.ali@eduplatform.com",
    code: "STU-2025-0003",
    subject: "UIUX",
    grade: "Grade 12",
    section: "A",
    guardianName: "Ali Mohammed",
    guardianPhone: "+20 112 3456789",
    joined: "2025-04-01",
  },
  {
    id: "4",
    name: "Sara Ibrahim",
    email: "sara.ibrahim@eduplatform.com",
    code: "STU-2025-0004",
    subject: "Geometry",
    grade: "Grade 9",
    section: "C",
    guardianName: "Ibrahim Hassan",
    guardianPhone: "+20 113 4567890",
    joined: "2025-04-05",
  },
  {
    id: "5",
    name: "Khaled Nasser",
    email: "khaled.nasser@eduplatform.com",
    code: "STU-2025-0005",
    subject: "Physics",
    grade: "Grade 10",
    section: "B",
    guardianName: "Nasser Khaled",
    guardianPhone: "+20 114 5678901",
    joined: "2025-04-15",
  },
];

export const studentSubjects: string[] = Array.from(new Set(students.map((student) => student.subject)));
export const studentGrades: string[] = Array.from(new Set(students.map((student) => student.grade)));
export const studentSections: string[] = Array.from(new Set(students.map((student) => student.section)));

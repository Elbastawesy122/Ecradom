import type { PlatformUser, PlatformUserRole } from "@/types/users";

export const platformUsers: PlatformUser[] = [
  {
    id: "1",
    name: "Ahmed Hassan",
    role: "Teacher",
    subject: "Programming",
    students: 142,
    joined: "2025-01-15",
    status: "Active",
  },
  {
    id: "2",
    name: "Sarah Mitchell",
    role: "Teacher",
    subject: "Mathematics",
    students: 98,
    joined: "2025-02-10",
    status: "Active",
  },
  {
    id: "3",
    name: "Omar Khalid",
    role: "Student",
    subject: null,
    students: null,
    joined: "2025-03-05",
    status: "Active",
  },
  {
    id: "4",
    name: "Lena Torres",
    role: "Teacher",
    subject: "UIUX",
    students: 75,
    joined: "2025-01-22",
    status: "Suspended",
  },
  {
    id: "5",
    name: "Yusuf Al-Amin",
    role: "Student",
    subject: null,
    students: null,
    joined: "2025-03-18",
    status: "Active",
  },
];

export const platformUserRoles: PlatformUserRole[] = ["Teacher", "Student"];

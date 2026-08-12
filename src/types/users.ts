export type PlatformUserRole = "Teacher" | "Student";
export type PlatformUserStatus = "Active" | "Suspended";

export interface PlatformUser {
  id: string;
  name: string;
  role: PlatformUserRole;
  subject: string | null;
  students: number | null;
  joined: string;
  status: PlatformUserStatus;
}

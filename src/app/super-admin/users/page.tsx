import { Download } from "lucide-react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import UserTable from "@/components/super-admin/UserTable";
import PageTabs from "@/components/ui/PageTabs";
import { platformUsers } from "@/data/users";

export default function SuperAdminUsersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9F9FB]">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-[#001069] sm:text-5xl">Super Admin</h1>
              <p className="mt-2 text-sm text-gray-400">EduPlatform &rsaquo; Super Admin</p>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 self-start rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[#001069] shadow-sm transition hover:shadow-md"
            >
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>

          <div className="mt-6">
            <PageTabs
              items={[
                { label: "Overview", href: "/super-admin", active: false },
                { label: "Users", href: "/super-admin/users", active: true },
                { label: "Settings", href: "/super-admin/settings", active: false },
              ]}
            />
          </div>

          <div className="mt-8">
            <UserTable users={platformUsers} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

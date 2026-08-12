"use client";

import { Filter, Pencil, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Pagination from "@/components/ui/Pagination";
import SearchInput from "@/components/ui/SearchInput";
import StatusBadge from "@/components/ui/StatusBadge";
import { platformUserRoles } from "@/data/users";
import type { PlatformUser, PlatformUserRole } from "@/types/users";

const ROLE_BADGE_CLASSES: Record<PlatformUserRole, string> = {
  Teacher: "bg-[#4577EF]/10 text-[#4577EF]",
  Student: "bg-green-100 text-green-600",
};

interface UserTableProps {
  users: PlatformUser[];
}

const PAGE_SIZE = 10;

export default function UserTable({ users }: UserTableProps) {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<PlatformUserRole | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [page, setPage] = useState(1);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();
    return users.filter((user) => {
      const matchesQuery = !query || user.name.toLowerCase().includes(query);
      const matchesRole = !roleFilter || user.role === roleFilter;
      return matchesQuery && matchesRole;
    });
  }, [users, search, roleFilter]);

  const pagedUsers = filteredUsers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-lg font-semibold text-black">User Management</h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button variant="primary" className="w-full sm:w-auto">
            + Add User
          </Button>
          <SearchInput
            value={search}
            onChange={(value) => {
              setSearch(value);
              setPage(1);
            }}
            placeholder="Search..."
            className="sm:w-56"
          />
          <div className="relative">
            <button
              type="button"
              onClick={() => setFilterOpen((prev) => !prev)}
              aria-pressed={filterOpen}
              className={`flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium shadow-sm transition ${
                filterOpen || roleFilter
                  ? "border-[#001069] bg-[#001069]/5 text-[#001069]"
                  : "border-black/10 bg-white text-black"
              }`}
            >
              <Filter className="h-4 w-4" />
              Filter
            </button>

            {filterOpen ? (
              <div className="absolute right-0 top-full z-10 mt-2 w-40 rounded-lg border border-black/10 bg-white p-2 shadow-md">
                <button
                  type="button"
                  onClick={() => {
                    setRoleFilter(null);
                    setFilterOpen(false);
                    setPage(1);
                  }}
                  className={`w-full rounded-md px-3 py-1.5 text-left text-sm ${
                    !roleFilter ? "bg-[#001069]/5 text-[#001069]" : "text-black hover:bg-gray-50"
                  }`}
                >
                  All Roles
                </button>
                {platformUserRoles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => {
                      setRoleFilter(role);
                      setFilterOpen(false);
                      setPage(1);
                    }}
                    className={`w-full rounded-md px-3 py-1.5 text-left text-sm ${
                      roleFilter === role ? "bg-[#001069]/5 text-[#001069]" : "text-black hover:bg-gray-50"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#001069] text-white">
              <th className="rounded-l-lg px-4 py-3 font-medium">#</th>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium">Subject</th>
              <th className="px-4 py-3 font-medium">Students</th>
              <th className="px-4 py-3 font-medium">Joined</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="rounded-r-lg px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pagedUsers.map((user, index) => (
              <tr key={user.id} className="border-b border-black/5 transition last:border-none hover:bg-[#F9F9FB]">
                <td className="px-4 py-4 text-gray-400">{(page - 1) * PAGE_SIZE + index + 1}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar name={user.name} accent={user.role === "Teacher" ? "navy" : "orange"} />
                    <p className="font-medium text-black">{user.name}</p>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${ROLE_BADGE_CLASSES[user.role]}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-500">{user.subject ?? "—"}</td>
                <td className="px-4 py-4 text-gray-500">{user.students ?? "—"}</td>
                <td className="px-4 py-4 text-gray-500">{user.joined}</td>
                <td className="px-4 py-4">
                  <StatusBadge status={user.status} />
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label={`Edit ${user.name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4577EF]/10 text-[#4577EF] transition hover:bg-[#4577EF]/20"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label={`Delete ${user.name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600 transition hover:bg-red-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {pagedUsers.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-sm text-gray-400">
                  No users match your search or filters.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <Pagination
        page={page}
        pageSize={PAGE_SIZE}
        total={filteredUsers.length}
        onPageChange={setPage}
        itemLabel="users"
      />
    </div>
  );
}

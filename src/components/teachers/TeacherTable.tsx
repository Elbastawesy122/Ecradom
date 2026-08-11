"use client";

import { useMemo, useState } from "react";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import FilterSelect from "@/components/ui/FilterSelect";
import Pagination from "@/components/ui/Pagination";
import SearchInput from "@/components/ui/SearchInput";
import StatusBadge from "@/components/ui/StatusBadge";
import { teacherLevels, teacherSubjects } from "@/data/teachers";
import type { Teacher } from "@/types/teachers";

interface TeacherTableProps {
  teachers: Teacher[];
}

const PAGE_SIZE = 10;

export default function TeacherTable({ teachers }: TeacherTableProps) {
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [page, setPage] = useState(1);

  const filteredTeachers = useMemo(() => {
    const query = search.trim().toLowerCase();
    return teachers.filter((teacher) => {
      const matchesQuery =
        !query ||
        teacher.name.toLowerCase().includes(query) ||
        teacher.email.toLowerCase().includes(query);
      const matchesSubject = !subjectFilter || teacher.subject === subjectFilter;
      const matchesLevel = !levelFilter || teacher.level === levelFilter;
      return matchesQuery && matchesSubject && matchesLevel;
    });
  }, [teachers, search, subjectFilter, levelFilter]);

  const pagedTeachers = filteredTeachers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-lg font-semibold text-black">All Teachers ({teachers.length})</h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <SearchInput
            value={search}
            onChange={(value) => {
              setSearch(value);
              setPage(1);
            }}
            placeholder="Search teachers..."
            className="sm:w-56"
          />
          <FilterSelect
            value={subjectFilter}
            onChange={(value) => {
              setSubjectFilter(value);
              setPage(1);
            }}
            options={teacherSubjects}
            allLabel="All Subject"
            className="sm:w-36"
            aria-label="Filter by subject"
          />
          <FilterSelect
            value={levelFilter}
            onChange={(value) => {
              setLevelFilter(value);
              setPage(1);
            }}
            options={teacherLevels}
            allLabel="All Levels"
            className="sm:w-36"
            aria-label="Filter by level"
          />
          <Button href="/teachers/add" className="w-full sm:w-auto">
            + Add Teacher
          </Button>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[960px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#001069] text-white">
              <th className="rounded-l-lg px-4 py-3 font-medium">#</th>
              <th className="px-4 py-3 font-medium">Teacher</th>
              <th className="px-4 py-3 font-medium">Subject</th>
              <th className="px-4 py-3 font-medium">Level</th>
              <th className="px-4 py-3 font-medium">Students</th>
              <th className="px-4 py-3 font-medium">Experience</th>
              <th className="px-4 py-3 font-medium">Joined</th>
              <th className="rounded-r-lg px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {pagedTeachers.map((teacher, index) => (
              <tr key={teacher.id} className="border-b border-black/5 transition last:border-none hover:bg-[#F9F9FB]">
                <td className="px-4 py-4 text-gray-400">{(page - 1) * PAGE_SIZE + index + 1}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar name={teacher.name} accent="navy" />
                    <div>
                      <p className="font-medium text-black">{teacher.name}</p>
                      <p className="text-xs text-gray-400">{teacher.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-gray-500">{teacher.subject}</td>
                <td className="px-4 py-4 text-gray-500">{teacher.level}</td>
                <td className="px-4 py-4 text-gray-500">{teacher.students}</td>
                <td className="px-4 py-4 text-gray-500">{teacher.experience}</td>
                <td className="px-4 py-4 text-gray-500">{teacher.joined}</td>
                <td className="px-4 py-4">
                  <StatusBadge status={teacher.status} />
                </td>
              </tr>
            ))}
            {pagedTeachers.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-sm text-gray-400">
                  No teachers match your search or filters.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <Pagination
        page={page}
        pageSize={PAGE_SIZE}
        total={filteredTeachers.length}
        onPageChange={setPage}
        itemLabel="teachers"
      />
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import FilterSelect from "@/components/ui/FilterSelect";
import Pagination from "@/components/ui/Pagination";
import SearchInput from "@/components/ui/SearchInput";
import { studentGrades, studentSubjects } from "@/data/students";
import type { Student } from "@/types/students";

interface StudentTableProps {
  students: Student[];
}

const PAGE_SIZE = 10;

export default function StudentTable({ students }: StudentTableProps) {
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [gradeFilter, setGradeFilter] = useState("");
  const [page, setPage] = useState(1);

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();
    return students.filter((student) => {
      const matchesQuery =
        !query ||
        student.name.toLowerCase().includes(query) ||
        student.email.toLowerCase().includes(query) ||
        student.code.toLowerCase().includes(query);
      const matchesSubject = !subjectFilter || student.subject === subjectFilter;
      const matchesGrade = !gradeFilter || student.grade === gradeFilter;
      return matchesQuery && matchesSubject && matchesGrade;
    });
  }, [students, search, subjectFilter, gradeFilter]);

  const pagedStudents = filteredStudents.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-lg font-semibold text-black">All Students ({students.length})</h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <SearchInput
            value={search}
            onChange={(value) => {
              setSearch(value);
              setPage(1);
            }}
            placeholder="Search students..."
            className="sm:w-56"
          />
          <FilterSelect
            value={subjectFilter}
            onChange={(value) => {
              setSubjectFilter(value);
              setPage(1);
            }}
            options={studentSubjects}
            allLabel="All Subject"
            className="sm:w-36"
            aria-label="Filter by subject"
          />
          <FilterSelect
            value={gradeFilter}
            onChange={(value) => {
              setGradeFilter(value);
              setPage(1);
            }}
            options={studentGrades}
            allLabel="All Grade"
            className="sm:w-36"
            aria-label="Filter by grade"
          />
          <Button href="/students/add" className="w-full sm:w-auto">
            + Add Student
          </Button>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[960px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#001069] text-white">
              <th className="rounded-l-lg px-4 py-3 font-medium">#</th>
              <th className="px-4 py-3 font-medium">Student</th>
              <th className="px-4 py-3 font-medium">Code</th>
              <th className="px-4 py-3 font-medium">Subject</th>
              <th className="px-4 py-3 font-medium">Grade</th>
              <th className="px-4 py-3 font-medium">Section</th>
              <th className="px-4 py-3 font-medium">Guardian</th>
              <th className="rounded-r-lg px-4 py-3 font-medium">Joined</th>
            </tr>
          </thead>
          <tbody>
            {pagedStudents.map((student, index) => (
              <tr key={student.id} className="border-b border-black/5 transition last:border-none hover:bg-[#F9F9FB]">
                <td className="px-4 py-4 text-gray-400">{(page - 1) * PAGE_SIZE + index + 1}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar name={student.name} accent="orange" />
                    <div>
                      <p className="font-medium text-black">{student.name}</p>
                      <p className="text-xs text-gray-400">{student.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-gray-500">{student.code}</td>
                <td className="px-4 py-4 text-gray-500">{student.subject}</td>
                <td className="px-4 py-4 text-gray-500">{student.grade}</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-[#4577EF]/10 px-3 py-1 text-xs font-medium text-[#4577EF]">
                    {student.section}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <p className="text-black">{student.guardianName}</p>
                  <p className="text-xs text-gray-400">{student.guardianPhone}</p>
                </td>
                <td className="px-4 py-4 text-gray-500">{student.joined}</td>
              </tr>
            ))}
            {pagedStudents.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-sm text-gray-400">
                  No students match your search or filters.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <Pagination
        page={page}
        pageSize={PAGE_SIZE}
        total={filteredStudents.length}
        onPageChange={setPage}
        itemLabel="students"
      />
    </div>
  );
}

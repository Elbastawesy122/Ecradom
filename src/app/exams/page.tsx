import { Download } from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";
import CreateExamTrigger from "@/components/exams/CreateExamTrigger";
import ExamTable from "@/components/exams/ExamTable";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { examStats, exams } from "@/data/exams";

export default function ExamsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9F9FB]">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-[#001069] sm:text-5xl">Exams Management</h1>
              <p className="mt-2 text-sm text-gray-400">EduPlatform &rsaquo; Exams Management</p>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 self-start rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[#001069] shadow-sm transition hover:shadow-md"
            >
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {examStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="mt-8">
            <CreateExamTrigger />
          </div>

          <div className="mt-8">
            <ExamTable exams={exams} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

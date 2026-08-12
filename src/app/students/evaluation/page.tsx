import { Check, Download, FileDown, Printer } from "lucide-react";

import ActivityList from "@/components/evaluation/ActivityList";
import OverallPerformanceCard from "@/components/evaluation/OverallPerformanceCard";
import PerformanceTrendChart from "@/components/evaluation/PerformanceTrendChart";
import StatTile from "@/components/evaluation/StatTile";
import SummaryCard from "@/components/evaluation/SummaryCard";
import TagCard from "@/components/evaluation/TagCard";
import TeacherEvaluationCard from "@/components/evaluation/TeacherEvaluationCard";
import Button from "@/components/ui/Button";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import {
  evaluationChartData,
  evaluationStudent,
  initialImprovements,
  initialStrengths,
  overallPerformance,
  performanceStats,
  recentActivities,
} from "@/data/evaluation";

export default function StudentEvaluationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9F9FB]">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-[#001069] sm:text-5xl">Student Evaluation</h1>
              <p className="mt-2 text-sm text-gray-400">EduPlatform &rsaquo; Student Evaluation</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button variant="outline">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button variant="outline">
                <FileDown className="h-4 w-4" />
                Export PDF
              </Button>
              <Button variant="outline">
                <Printer className="h-4 w-4" />
                Print
              </Button>
              <Button variant="primary">
                <Check className="h-4 w-4" />
                Save Evaluation
              </Button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="flex flex-col gap-6 lg:col-span-2">
              <SummaryCard student={evaluationStudent} />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {performanceStats.map((stat) => (
                  <StatTile key={stat.label} {...stat} />
                ))}
              </div>

              <PerformanceTrendChart data={evaluationChartData} />

              <ActivityList activities={recentActivities} />
            </div>

            <div className="flex flex-col gap-6 lg:col-span-1">
              <OverallPerformanceCard performance={overallPerformance} />
              <TeacherEvaluationCard />
              <TagCard title="Strengths" initialTags={initialStrengths} tone="green" placeholder="Add strength..." />
              <TagCard
                title="Needs Improvement"
                initialTags={initialImprovements}
                tone="neutral"
                placeholder="Add area..."
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

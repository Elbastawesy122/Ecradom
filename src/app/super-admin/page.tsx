import DashboardChart from "@/components/dashboard/DashboardChart";
import ListCard from "@/components/dashboard/ListCard";
import StatCard from "@/components/dashboard/StatCard";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { chartData, recentActivity, statCards, topMaterials } from "@/data/dashboard";

export default function SuperAdminPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9F9FB]">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-black sm:text-5xl">Super Admin</h1>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {statCards.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-black">Platform Overview</h2>
            <div className="mt-4">
              <DashboardChart data={chartData} />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <ListCard title="Recent Activity" items={recentActivity} />
            <ListCard title="Top Materials" items={topMaterials} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

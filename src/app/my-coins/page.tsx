import { Download } from "lucide-react";

import MonthlyCoinsChart from "@/components/charts/MonthlyCoinsChart";
import BalanceCard from "@/components/dashboard/BalanceCard";
import StatCard from "@/components/dashboard/StatCard";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ConsumptionLogTable from "@/components/tables/ConsumptionLogTable";
import PurchaseHistoryTable from "@/components/tables/PurchaseHistoryTable";
import {
  CURRENT_BALANCE,
  consumptionLog,
  monthlyCoinsData,
  purchaseHistory,
  summaryCards,
} from "@/data/my-coins";

export default function MyCoinsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9F9FB]">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-[#001069] sm:text-5xl">My Coins</h1>
              <p className="mt-2 text-sm text-gray-400">EduPlatform &rsaquo; My Coins</p>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 self-start rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[#001069] shadow-sm transition hover:shadow-md"
            >
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <BalanceCard balance={CURRENT_BALANCE} />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
              {summaryCards.map((card) => (
                <StatCard key={card.label} {...card} />
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-black">Monthly Coins Usage</h2>
            <div className="mt-4">
              <MonthlyCoinsChart data={monthlyCoinsData} />
            </div>
          </div>

          <div className="mt-8">
            <PurchaseHistoryTable purchases={purchaseHistory} />
          </div>

          <div className="mt-8">
            <ConsumptionLogTable records={consumptionLog} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

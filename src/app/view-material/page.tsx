import { Filter } from "lucide-react";
import { Caveat } from "next/font/google";

import Footer from "@/components/layout/Footer";
import MaterialColumn from "@/components/materials/MaterialColumn";
import MaterialSummaryCard from "@/components/materials/MaterialSummaryCard";
import { filterOptions, materialColumns, summaryCards } from "@/data/materials";
import { MATERIAL_TYPE_ICONS } from "@/lib/material-icons";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });

export default function ViewMaterialPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9F9FB]">
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h1
            className={`${caveat.className} text-center text-5xl font-bold text-black sm:text-6xl`}
          >
            View Material
          </h1>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-black">
              <Filter className="h-4 w-4" />
              <span>Filter by type</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {filterOptions.map((filter) => {
                const Icon = MATERIAL_TYPE_ICONS[filter.type];
                return (
                  <button
                    key={filter.type}
                    type="button"
                    className="flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition hover:shadow-md"
                  >
                    <Icon className="h-4 w-4" />
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {materialColumns.map((column) => (
              <MaterialColumn
                key={column.type}
                icon={MATERIAL_TYPE_ICONS[column.type]}
                label={column.label}
                items={column.items}
              />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {summaryCards.map((card) => (
              <MaterialSummaryCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

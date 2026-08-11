import { Plus } from "lucide-react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MaterialTypeField from "@/components/materials/MaterialTypeField";
import PillButton from "@/components/materials/PillButton";

const DESCRIPTION =
  "This material includes a collection of files and multimedia, including PowerPoint presentations and explainer videos, to cover all aspects of the topic";

export default function AddMaterialPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9F9FB]">
      <Header />

      <main className="flex-1">
        <div className="mx-auto flex w-full max-w-md flex-col items-center px-4 py-10 sm:px-6">
          <PillButton icon={Plus} iconClassName="text-[#FF8414]">
            Add Material
          </PillButton>

          <form className="mt-8 flex w-full flex-col items-center gap-6">
            <input
              type="text"
              placeholder="Material name"
              aria-label="Material name"
              className="w-full rounded-2xl bg-[#001069] px-6 py-4 text-lg font-medium text-white placeholder:text-white shadow-sm focus:outline-none"
            />

            <MaterialTypeField />

            <div className="w-full rounded-2xl bg-[#FF8414] p-5 text-left text-sm leading-relaxed text-white shadow-sm">
              {DESCRIPTION}
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <PillButton icon={Plus} className="flex-1">
                Upload a file
              </PillButton>
              <PillButton icon={Plus} className="flex-1">
                Add link
              </PillButton>
            </div>

            <PillButton icon={Plus}>Multiple files</PillButton>

            <div className="mt-2 flex items-center justify-center gap-4">
              <button
                type="button"
                className="rounded-lg bg-[#FF8414] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                Save
              </button>
              <button
                type="button"
                className="rounded-lg bg-[#001069] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

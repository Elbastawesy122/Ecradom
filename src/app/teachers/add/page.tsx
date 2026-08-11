import PageTabs from "@/components/ui/PageTabs";
import TeacherForm from "@/components/teachers/TeacherForm";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function AddTeacherPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9F9FB]">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-[#001069] sm:text-5xl">Teachers Management</h1>
              <p className="mt-2 text-sm text-gray-400">EduPlatform &rsaquo; Teachers Management</p>
            </div>

            <PageTabs
              items={[
                { label: "+ Add Teacher", href: "/teachers/add", active: true },
                { label: "All Teachers", href: "/teachers", active: false },
              ]}
            />
          </div>

          <div className="mt-8 max-w-3xl">
            <TeacherForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

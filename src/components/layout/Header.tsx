import { Bell, Menu, Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#F9F9FB]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <button
          type="button"
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black shadow-sm transition hover:shadow-md"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition hover:shadow-md"
          >
            <Moon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition hover:shadow-md"
          >
            <Bell className="h-5 w-5" />
          </button>
          <span className="h-10 w-10 rounded-full bg-[#001069]" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}

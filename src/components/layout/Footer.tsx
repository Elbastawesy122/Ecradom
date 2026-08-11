import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = ["Home", "Product", "Pricing", "Contact"];
const LEGAL_LINKS = ["Terms & Conditions", "Privacy Policy", "Accessibility", "Legal"];

export default function Footer() {
  return (
    <footer className="w-full bg-[#001069] text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <Image src="/assets/logo.svg" alt="Educational logo" width={160} height={40} />
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm lg:justify-start">
              {NAV_LINKS.map((link) => (
                <Link key={link} href="#" className="text-white transition hover:text-white/80">
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center gap-3 lg:items-end">
            <p className="text-sm text-white">Get the freshest news from us</p>
            <form className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address..."
                className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="button"
                className="shrink-0 rounded-lg bg-[#FF8414] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            {LEGAL_LINKS.map((link) => (
              <Link key={link} href="#" className="transition hover:text-white">
                {link}
              </Link>
            ))}
          </div>
          <p className="text-xs text-white/50">Design with love © Zaker Pro. All right reserved</p>
        </div>
      </div>
    </footer>
  );
}

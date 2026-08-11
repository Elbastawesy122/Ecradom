import { Wallet } from "lucide-react";

interface BalanceCardProps {
  balance: number;
}

export default function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#001069] p-6 text-white shadow-sm">
      <span
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-14 -left-10 h-36 w-36 rounded-full bg-white/5"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
          <Wallet className="h-5 w-5" />
        </div>

        <div>
          <p className="text-4xl font-bold">{balance}</p>
          <p className="mt-1 text-sm text-white/70">Current Balance (Coins)</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="flex-1 rounded-lg bg-[#FF8414] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            Buy Coins
          </button>
          <button
            type="button"
            className="flex-1 rounded-lg border border-white/30 bg-transparent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Renew Plan
          </button>
        </div>
      </div>
    </div>
  );
}

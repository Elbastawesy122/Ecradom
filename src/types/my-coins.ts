export interface MonthlyCoinsPoint {
  month: string;
  coins: number;
}

export interface PurchaseRecord {
  date: string;
  package: string;
  coins: number;
  amount: string;
  status: "Completed";
}

export interface ConsumptionRecord {
  date: string;
  action: string;
  coins: number;
  balanceAfter: number;
}

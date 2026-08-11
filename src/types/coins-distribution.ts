export interface ExamCoinsPoint {
  exam: string;
  coins: number;
}

export type OperationStatus = "Completed" | "Failed";

export interface StatusBreakdownPoint {
  name: OperationStatus;
  value: number;
}

export interface DistributionOperation {
  exam: string;
  date: string;
  eligibleStudents: number;
  coinsSent: number;
  status: OperationStatus;
}

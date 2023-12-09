export interface Debt {
  id: number;
  debtName?: string;
  remainingDebtAmount?: number;
  currentApr?: number;
  currentMonthlyPayment?: number;
}

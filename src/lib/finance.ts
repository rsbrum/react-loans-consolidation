export function calculateTotalAmountPaid(
  remainingDebt: number,
  annualPercentageRate: number,
  monthlyPayment: number
) {
  // Convert APR to a monthly interest rate
  if (annualPercentageRate === 0) annualPercentageRate = 1;

  const monthlyInterestRate = annualPercentageRate / 100 / 12;

  // Calculate the number of payments
  // Formula: N = -log(1 - B * i / P) / log(1 + i)
  // where B is the loan balance, i is the monthly interest rate, and P is the monthly payment
  let numberOfPayments =
    -Math.log(1 - (remainingDebt * monthlyInterestRate) / monthlyPayment) /
    Math.log(1 + monthlyInterestRate);

  // Round up since you can't make a fraction of a payment
  numberOfPayments = Math.ceil(numberOfPayments);

  // Calculate the total amount paid
  return monthlyPayment * numberOfPayments;
}

export function calculateLoanDetails(
  remainingDebt: number,
  annualPercentageRate: number,
  numberOfPayments: number
) {
  // Convert APR to a monthly interest rate
  const monthlyInterestRate = annualPercentageRate / 100 / 12;

  // Calculate the monthly payment using the formula for an annuity
  // P = (r*PV) / (1 - (1 + r)^(-n))
  const monthlyPayment =
    (monthlyInterestRate * remainingDebt) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  // Calculate the total amount paid over the loan term
  const totalAmountPaid = monthlyPayment * numberOfPayments;

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalAmountPaid: totalAmountPaid.toFixed(2),
  };
}

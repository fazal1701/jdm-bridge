// Financing calculation utilities

interface FinanceInput {
  vehiclePrice: number;
  downPayment: number;
  apr: number;
  termMonths: number;
}

export function calculateMonthlyPayment({
  vehiclePrice,
  downPayment,
  apr,
  termMonths,
}: FinanceInput) {
  const principal = vehiclePrice - downPayment;
  const monthlyRate = apr / 100 / 12;

  if (monthlyRate === 0) {
    return {
      payment: principal / termMonths,
      totalPaid: principal,
      totalInterest: 0,
    };
  }

  const payment =
    (principal * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -termMonths));

  const totalPaid = payment * termMonths;
  const totalInterest = totalPaid - principal;

  return {
    payment: Math.round(payment * 100) / 100,
    totalPaid: Math.round(totalPaid * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
  };
}



export const numberWithCommas = (x: string): string => {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const displayAmount = (amount: number): string => {
  const sign = amount < 0 ? '-' : '+';
  const displayTotal = numberWithCommas(Math.abs(amount).toFixed(2));

  return `${sign}£${displayTotal}`;
};

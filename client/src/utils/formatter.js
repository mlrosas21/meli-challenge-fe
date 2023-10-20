export function formatMoney(integerPart, decimalPart) {
  if (typeof integerPart !== 'number' || typeof decimalPart !== 'number') {
    return 'Invalid input';
  }

  const number = integerPart + decimalPart / 100;

  const parts = number.toFixed(2).toString().split('.');

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return parts.join(',');
}

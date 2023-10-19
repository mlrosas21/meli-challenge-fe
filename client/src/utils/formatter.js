export function formatMoney(number) {
  // Ensure the input is a number
  if (typeof number !== 'number') {
    return 'Invalid input';
  }

  const parts = number.toFixed(2).toString().split('.');

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return parts.join(',');
}

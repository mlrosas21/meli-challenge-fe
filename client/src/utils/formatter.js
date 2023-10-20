export function formatMoney(number) {
  if (typeof number !== 'number') {
    return 'Invalid input';
  }

  const parts = number.toString().split('.');

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return parts[0];
}



export function formatCondition(itemCondition){
  const CONDITION = {
    new: 'Nuevo',
    used: 'Usado',
    not_specified: 'Sin especificar'
  }

  return CONDITION[itemCondition]
}

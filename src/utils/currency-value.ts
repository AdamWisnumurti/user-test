export const CurrencyValue = (value: string | number) => {
  // const val = new Intl.NumberFormat('id-ID').format(value as number);
  const val = (Math.round((value as number) * 100) / 100).toFixed(2);
  const listVal: unknown[] = val.split('.');
  const valNumber = new Intl.NumberFormat('id-ID').format(listVal[0] as number);
  return `${valNumber},${listVal[1]}`;
  // return val;
  // return `Rp. ${val}`;
};

export default CurrencyValue;

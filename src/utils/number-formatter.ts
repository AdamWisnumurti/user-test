export const NumberFormatter = (value: string | number) => {
  const val = new Intl.NumberFormat('id-ID').format(value as number);
  return val;
};

export default NumberFormatter;

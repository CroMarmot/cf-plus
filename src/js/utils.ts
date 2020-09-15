export const intDiv = (val1: number, val2: number): number => {
  if (val2 === 0) {
    return NaN;
  }
  return (val1 - val1 % val2) / val2;
};
const dateParse = (val): number[] => {
  const d = new Date(val);
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()];
};
export const timestamp2number = (val): number => {
  const [y, m, d] = dateParse(val);
  return y * 10000 + m * 100 + d;
};
export const nextDayNumber = (val: number): number => {
  const [y, m, d] = [intDiv(val, 10000), intDiv(val, 100) % 100, val % 100 + 1];
  const dt = new Date(y, m - 1, d);
  return timestamp2number(dt.getTime());
};

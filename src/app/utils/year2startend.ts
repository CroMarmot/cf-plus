export function year2startend(year: string): { start: any; end: any } {
  let start = 2000;
  let end = new Date().getFullYear() + 1;
  if (/^\d{4}$/.test(year)) {
    start = Number(year);
    end = Number(year) + 1;
  }
  return {
    start: new Date(`${Number(start)}-01-01`).getTime(),
    end: new Date(`${Number(end)}-01-01`).getTime(),
  };
}

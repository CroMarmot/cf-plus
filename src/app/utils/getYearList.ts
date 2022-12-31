export function getYearList() {
  const list = [];
  const curYear = new Date().getFullYear();
  for (let i = curYear; i >= 2010; i--) {
    list.push(`${i}`);
  }
  return list;
}

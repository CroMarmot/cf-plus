export const intDiv = (val1: number, val2: number): number => {
  if (val2 === 0) {
    return NaN;
  }
  return (val1 - (val1 % val2)) / val2;
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
  const [y, m, d] = [
    intDiv(val, 10000),
    intDiv(val, 100) % 100,
    (val % 100) + 1,
  ];
  const dt = new Date(y, m - 1, d);
  return timestamp2number(dt.getTime());
};

export class LSCacheTool<T> {
  cachedData: Map<string, T> = null;
  prefix: string;

  // TODO on local storage change
  constructor(localStoragePrefix: string) {
    this.cachedData = new Map<string, T>();
    this.prefix = localStoragePrefix;
  }

  async Get(key: string, fallBack: () => Promise<T>): Promise<T> {
    // TODO add force refech
    if (this.cachedData.has(key)) {
      return this.cachedData.get(key);
    }
    // check local storage
    const now = Date.now();
    const lskey = `${this.prefix}${key}`;
    const jsondata = localStorage.getItem(lskey);
    let timestamp = 0;
    let result = null;
    try {
      const data = JSON.parse(jsondata);
      if (data) {
        timestamp = data.timestamp;
        result = data.result;
      }
    } catch (e) {
      console.error(e);
    }
    if (result && now - timestamp < 60 * 60 * 1000) {
      // TODO 1 day
      // 1 hour
      this.cachedData.set(key, result);
      return result;
    }
    // use callback
    result = await fallBack(); // may fail with exception
    this.cachedData.set(key, result);
    try {
      // may more than 5mb, TODO split by month?
      localStorage.setItem(
        lskey,
        JSON.stringify({
          timestamp: now,
          result,
        })
      );
    } catch (e) {
      console.error(e);
    }
    return result;
  }
}

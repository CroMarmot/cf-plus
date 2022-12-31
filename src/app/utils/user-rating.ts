import { CfUserRatingItem } from '../model/CfUserRatingItem';

export function filterYear(
  l: CfUserRatingItem[],
  year: string
): CfUserRatingItem[] {
  if (!year) return l;
  const y = Number(year);
  if (!(y >= 2000 && y <= 2100)) throw new Error('Wrong year');
  const start = new Date(`${y}-01-01`).getTime();
  const end = new Date(`${y + 1}-01-01`).getTime();
  return l.filter(
    (item) =>
      item.ratingUpdateTimeSeconds * 1000 >= start &&
      item.ratingUpdateTimeSeconds * 1000 < end
  );
}
// array in [old -> new] order
export function ratingChange(l: CfUserRatingItem[]): number {
  if (l.length == 0) return 0;
  return l[l.length - 1].newRating - l[0].oldRating;
}

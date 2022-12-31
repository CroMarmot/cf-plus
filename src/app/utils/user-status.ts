import { Submission } from '../model/api/Submission';
import { ProblemAnalyzeResult } from '../model/ProblemAnalyzeResult';

export function userStatusFilterYear(
  l: Submission[],
  year: string
): Submission[] {
  if (!year) return l;
  const y = Number(year);
  if (!(y >= 2000 && y <= 2100)) throw new Error('Wrong year');
  const start = new Date(`${y}-01-01`).getTime();
  const end = new Date(`${y + 1}-01-01`).getTime();
  return l.filter(
    (o) =>
      o.creationTimeSeconds * 1000 >= start &&
      o.creationTimeSeconds * 1000 <= end
  );
}

export type participantTypeString =
  | 'RATED'
  | 'UNRATED'
  | 'CONTESTANT'
  | 'PRACTICE'
  | 'VIRTUAL'
  | 'MANAGER'
  | 'OUT_OF_COMPETITION'
  | '';

export function userStatusFilterParticipantType(
  l: Submission[],
  participantType: participantTypeString,
  ratedContestId: Set<number>
): Submission[] {
  participantType = (
    participantType || ''
  ).toUpperCase() as participantTypeString;
  console.log({ participantType });
  if (participantType == 'RATED') {
    return l.filter(
      (o) =>
        o.author?.participantType == 'CONTESTANT' &&
        ratedContestId.has(o.contestId)
    ); // TODO need user-rating
  } else if (participantType == 'UNRATED') {
    return l.filter(
      (o) =>
        o.author?.participantType == 'CONTESTANT' &&
        !ratedContestId.has(o.contestId)
    ); // TODO need user-rating
  } else if (
    [
      'CONTESTANT',
      'PRACTICE',
      'VIRTUAL',
      'MANAGER',
      'OUT_OF_COMPETITION',
    ].includes(participantType)
  ) {
    return l.filter((o) => o.author?.participantType == participantType);
  } else {
    return l;
  }
}

function problemKey(s: Submission): string {
  return `${s.contestId}@${s.problem.index}`;
}

export function contestCount(l: Submission[]): number {
  const s = new Set<number>();
  l.forEach((o) => s.add(o.contestId));
  return s.size;
}

export function acCount(l: Submission[]): number {
  const s = new Set<string>();
  l.filter((o) => o.verdict == 'OK').forEach((o) => s.add(problemKey(o)));
  return s.size;
}

// list in [new -> old] order
export function analyzeProblem(l: Submission[]): ProblemAnalyzeResult[] {
  const s = new Map<string, ProblemAnalyzeResult>();
  for (let i = l.length - 1; i >= 0; i--) {
    const o = l[i];
    const key = problemKey(o);
    if (!s.has(key)) {
      s.set(key, {
        attempt: 0,
        ac: false,
        submit: 0,
        actime: -1,
        rating: o.problem.rating || 0,
        contestId: o.problem.contestId,
        index: o.problem.index,
        name:o.problem.name
      });
    }
    const d = s.get(key);
    d.submit += 1;
    if (d.ac == false) d.attempt += 1;
    if (o.verdict == 'OK' && !d.ac) {
      if (o.relativeTimeSeconds && o.author.startTimeSeconds) {
        d.actime = o.creationTimeSeconds - o.author.startTimeSeconds;
      }
    }
    if (o.verdict == 'OK') d.ac = true;
  }
  const ret = [];
  s.forEach((o) => ret.push(o));
  return ret;
}

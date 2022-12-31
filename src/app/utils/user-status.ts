import { Submission } from '../model/api/Submission';
import { ProblemAnalyzeResult } from '../model/ProblemAnalyzeResult';

export function userStatusFilterYear(
  l: Submission[],
  year: string
): Submission[] {
  if (!year) return [...l];
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
    return [...l]; // return copy instead of self
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
        name: o.problem.name,
        tags: o.problem.tags,
        firstAcLanguage: '',
      });
    }
    const d = s.get(key);
    d.submit += 1;
    if (d.ac == false) d.attempt += 1;
    if (o.verdict == 'OK' && !d.ac) {
      if (o.relativeTimeSeconds && o.author.startTimeSeconds) {
        d.actime = o.creationTimeSeconds - o.author.startTimeSeconds;
        d.firstAcLanguage = o.programmingLanguage;
      }
    }
    if (o.verdict == 'OK') d.ac = true;
  }
  const ret = [];
  s.forEach((o) => ret.push(o));
  return ret;
}

export type FieldCountAnalyzeResult = {
  name: string;
  count: number;
};

export function analyzeVerdict(l: Submission[]): FieldCountAnalyzeResult[] {
  const s = new Map<string, number>();
  l.forEach((o) => {
    if (!s.has(o.verdict)) {
      s.set(o.verdict, 0);
    }
    s.set(o.verdict, s.get(o.verdict) + 1);
  });
  const ret: FieldCountAnalyzeResult[] = [];
  s.forEach((count, name) => ret.push({ name, count }));
  ret.sort((a, b) => b.count - a.count);
  return ret;
}

export function analyzeAcTags(l: Submission[]): FieldCountAnalyzeResult[] {
  const acProblemList = analyzeProblem(l).filter((o) => o.ac);
  const s = new Map<string, number>();
  acProblemList.forEach((o) => {
    o.tags.forEach((tag) => {
      if (!s.has(tag)) {
        s.set(tag, 0);
      }
      s.set(tag, s.get(tag) + 1);
    });
  });
  const ret: FieldCountAnalyzeResult[] = [];
  s.forEach((count, name) => ret.push({ name, count }));
  ret.sort((a, b) => b.count - a.count);
  return ret;
}

export function analyzeLanguage(l: Submission[]): FieldCountAnalyzeResult[] {
  const acProblemList = analyzeProblem(l).filter((o) => o.ac);
  const s = new Map<string, number>();
  acProblemList.forEach((o) => {
    if (!s.has(o.firstAcLanguage)) {
      s.set(o.firstAcLanguage, 0);
    }
    s.set(o.firstAcLanguage, s.get(o.firstAcLanguage) + 1);
  });
  const ret: FieldCountAnalyzeResult[] = [];
  s.forEach((count, name) => ret.push({ name, count }));
  ret.sort((a, b) => b.count - a.count);
  return ret;
}

export function analyzeAcRating(l: Submission[]): FieldCountAnalyzeResult[] {
  const acProblemList = analyzeProblem(l).filter((o) => o.ac && o.rating);
  const s = new Map<string, number>();
  acProblemList.forEach((o) => {
    const rating = String(o.rating);
    if (!s.has(rating)) {
      s.set(rating, 0);
    }
    s.set(rating, s.get(rating) + 1);
  });
  const ret: FieldCountAnalyzeResult[] = [];
  s.forEach((count, name) => ret.push({ name, count }));
  ret.sort((a, b) => Number(b.name) - Number(a.name));
  return ret;
}

export function analyzeAcIndex(l: Submission[]): FieldCountAnalyzeResult[] {
  const acProblemList = analyzeProblem(l).filter((o) => o.ac && o.index);
  const s = new Map<string, number>();
  acProblemList.forEach((o) => {
    if (!s.has(o.index)) {
      s.set(o.index, 0);
    }
    s.set(o.index, s.get(o.index) + 1);
  });
  const ret: FieldCountAnalyzeResult[] = [];
  s.forEach((count, name) => ret.push({ name, count }));
  ret.sort((a, b) => (a.name < b.name ? -1 : 1));
  return ret;
}

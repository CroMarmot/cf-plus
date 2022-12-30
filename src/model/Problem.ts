// https://codeforces.com/apiHelp/objects#Problem
export interface Problem {
  contestId: number; // Integer. Can be absent. Id of the contest, containing the problem.
  index: string; // Usually, a letter or letter with digit(s) indicating the problem index in a contest.
  problemsetName: string; // Can be absent. Short name of the problemset the problem belongs to.
  name: string; // Localized.
  type: 'PROGRAMMING' | 'QUESTION';
  points: number; // Floating point number. Can be absent. Maximum amount of points for the problem.
  rating: number; // Integer. Can be absent. Problem rating (difficulty).
  tags: string[]; // String list. Problem tags.
}

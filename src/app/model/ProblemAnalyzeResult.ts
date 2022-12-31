export type ProblemAnalyzeResult = {
  attempt: number; // count
  ac: boolean;
  submit: number; // count
  actime: number; // seconds
  // from problem field
  contestId: number;
  index: string;
  rating: number;
  name: string;
  tags: string[];
  firstAcLanguage: string;
};

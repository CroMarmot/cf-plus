import { Injectable } from '@angular/core';

class CFUrlConfig {
  userRatingPrefix: string;
  contestPrefix: string;
}

const urlOnline: CFUrlConfig = {
  userRatingPrefix: 'https://codeforces.com/api/user.rating?',
  contestPrefix: 'https://codeforces.com/contest',
};

const urlStatic: CFUrlConfig = {
  userRatingPrefix: 'assets/staticdata/cf/user.rating.json',
  contestPrefix: 'https://codeforces.com/contest',
};

class ScoreColors {
  scoreLow: number;
  scoreHigh: number;
  color: string;
  name: string;
}

const COLORS: ScoreColors[] = [
  { scoreLow: 0, scoreHigh: 1200, color: '#cccccc', name: 'Newbie' },
  { scoreLow: 1200, scoreHigh: 1400, color: '#70eb74', name: 'Pupil' },
  { scoreLow: 1400, scoreHigh: 1600, color: '#76ddbb', name: 'Specialist' },
  { scoreLow: 1600, scoreHigh: 1900, color: '#aaa9fc', name: 'Expert' },
  { scoreLow: 1900, scoreHigh: 2100, color: '#ec84fc', name: 'Candidate Master' },
  { scoreLow: 2100, scoreHigh: 2300, color: '#fecc88', name: 'Master' },
  { scoreLow: 2300, scoreHigh: 2400, color: '#fcbb54', name: 'International Master' },
  { scoreLow: 2400, scoreHigh: 2600, color: '#f47476', name: 'Grandmaster' },
  { scoreLow: 2600, scoreHigh: 3000, color: '#f24533', name: 'International Grandmaster' },
  { scoreLow: 3000, scoreHigh: 4000, color: '#ab2e16', name: 'Legendary grandmaster' },
];

@Injectable({
  providedIn: 'root',
})
export class CodeforcesStaticService {
  constructor() {}

  public static getUrl(): CFUrlConfig {
    return urlOnline;
  }

  public static getColors(): ScoreColors[] {
    return COLORS;
  }
}

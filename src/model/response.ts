import {CfUserRatingItem} from './CfUserRatingItem';

export class UserStatusResp {
  status: string;
  result: {
    id: number;
    contestId: number,
    creationTimeSeconds: number,
    relativeTimeSeconds: number,
    problem: {
      contestId: number,
      index: string,
      name: string,
      type: string,
      points: number,
      rating: number,
      tags: string[],
    },
    author: {
      contestId: number,
      members: { handle: string }[],
      participantType: string,
      ghost: boolean,
      startTimeSeconds: number
    },
    programmingLanguage: string,
    verdict: string,
    testset: string,
    passedTestCount: number,
    timeConsumedMillis: number,
    memoryConsumedBytes: number
  }[];
}

export class UserRatingResp {
  status: string;
  result: CfUserRatingItem[];
}

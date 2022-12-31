import { Injectable } from '@angular/core';
import { UserRatingResp, UserStatusResp } from '../model/api/response';
import { LSCacheTool } from '../utils/utils';
// import UserStatus from './user.status.js';

@Injectable({
  providedIn: 'root',
})
export class CodeforcesApiService {
  userStatusCache: LSCacheTool<UserStatusResp>;
  userRatingCache: LSCacheTool<UserRatingResp>;

  constructor() {
    this.userStatusCache = new LSCacheTool<UserStatusResp>('user.status.');
    this.userRatingCache = new LSCacheTool<UserRatingResp>('user.rating.');
  }

  getUserStatus(userName: string): Promise<UserStatusResp> {
    if (!userName) {
      return Promise.resolve({
        status: 'OK',
        result: [],
      });
    }
    // https://codeforces.com/apiHelp/methods#user.status
    return this.userStatusCache.Get(userName, () =>
      fetch(`https://codeforces.com/api/user.status?handle=${userName}`).then(
        (res) => res.json()
      )
    );
  }

  getUserRating(userName: string): Promise<UserRatingResp> {
    if (!userName) {
      return Promise.resolve({
        status: 'OK',
        result: [],
      });
    }
    return this.userRatingCache.Get(userName, () =>
      fetch(`https://codeforces.com/api/user.rating?handle=${userName}`).then(
        (res) => res.json()
      )
    );
  }
}

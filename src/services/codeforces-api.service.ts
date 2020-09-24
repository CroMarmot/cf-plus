import {Injectable} from '@angular/core';
import {UserRatingResp, UserStatusResp} from '../model/response';
import {CacheTool} from '../js/utils';
// import UserStatus from './user.status.js';

@Injectable({
  providedIn: 'root'
})
export class CodeforcesApiService {
  userStatusCache: CacheTool<UserStatusResp>;
  userRatingCache: CacheTool<UserRatingResp>;

  constructor() {
    this.userStatusCache = new CacheTool<UserStatusResp>();
    this.userRatingCache = new CacheTool<UserRatingResp>();
  }

  getUserStatus(userName: string): Promise<UserStatusResp> {
    // return Promise.resolve(UserStatus);
    return this.userStatusCache.Get(userName, () =>
      fetch(`https://codeforces.com/api/user.status?handle=${userName}`).then(res => res.json())
    );
  }

  getUserRating(userName: string): Promise<UserRatingResp> {
    return this.userRatingCache.Get(userName, () =>
      fetch(`https://codeforces.com/api/user.rating?handle=${userName}`).then(res => res.json())
    );
  }
}

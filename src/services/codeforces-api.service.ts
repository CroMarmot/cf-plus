import {Injectable} from '@angular/core';
import {UserRatingResp, UserStatusResp} from '../model/response';

@Injectable({
  providedIn: 'root'
})
export class CodeforcesApiService {

  constructor() {
  }

  getUserStatus(userName: string): Promise<UserStatusResp> {
    return fetch(`https://codeforces.com/api/user.status?handle=${userName}`).then(res => res.json());
  }

  getUserRating(userName: string): Promise<UserRatingResp> {
    return fetch(`https://codeforces.com/api/user.rating?handle=${userName}`).then(res => res.json());
  }
}

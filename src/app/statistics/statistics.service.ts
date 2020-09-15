import {Injectable} from '@angular/core';
import {UserStatusResp} from '../../model/response';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor() {
  }

  getUserData(userName: string): Promise<UserStatusResp> {
    return fetch(`https://codeforces.com/api/user.status?handle=${userName}`).then(res => res.json());
  }
}

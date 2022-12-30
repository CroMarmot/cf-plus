import { CfUserRatingItem } from './CfUserRatingItem';
import { Submission } from './Submission';

export class UserStatusResp {
  status: string; // 'OK'
  result: Submission[];
}

export class UserRatingResp {
  status: string; // 'OK'
  result: CfUserRatingItem[];
}

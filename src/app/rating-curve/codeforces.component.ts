import {Component, OnInit} from '@angular/core';
import {CfUserRatingItem} from '../../model/CfUserRatingItem';
import {CodeforcesApiService} from '../../services/codeforces-api.service';
import {UserStatus} from '../../model/response';

interface DisplayData {
  label: string;
  userRating: CfUserRatingItem[];
  userStatus: UserStatus[];
}

@Component({
  selector: 'app-codeforces',
  templateUrl: './codeforces.component.html',
  styleUrls: ['./codeforces.component.less'],
})
export class CodeforcesComponent implements OnInit {
  customLists: DisplayData = {label: 'Custom', userRating: [], userStatus: []};

  defaultLists: DisplayData[] = [];

  customName = '';

  constructor(private codeforcesApiService: CodeforcesApiService) {
  }

  ngOnInit(): void {
    const defaultUsers: string[] = ['Cro-Marmot']; // HTTP 429 , 'YeXiaoRain', 'Allen_3'];
    this.defaultLists = defaultUsers.map(label => ({
      label,
      userRating: [],
      userStatus: [],
    }));
    defaultUsers.forEach((label, index) => {
      this.codeforcesApiService.getUserRating(label).then((ret) => {
        this.defaultLists[index].userRating = ret.result;
      });
      this.codeforcesApiService.getUserStatus(label).then((ret) => {
        this.defaultLists[index].userStatus = ret.result;
      });
    });
  }

  queryCustom(): void {
    if (this.customName === '') {
      return;
    }
    this.codeforcesApiService.getUserRating(this.customName).then((ret) => {
      this.customLists.userRating = ret.result;
    });
    this.codeforcesApiService.getUserStatus(this.customName).then((ret) => {
      this.customLists.userStatus = ret.result;
    });
  }
}

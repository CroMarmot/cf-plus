import {Component, OnInit} from '@angular/core';
import {CfUserRatingItem} from '../../model/CfUserRatingItem';
import {CodeforcesApiService} from '../../services/codeforces-api.service';

@Component({
  selector: 'app-codeforces',
  templateUrl: './codeforces.component.html',
  styleUrls: ['./codeforces.component.less'],
})
export class CodeforcesComponent implements OnInit {
  CroMarmotRatingList: CfUserRatingItem[] = [];
  YeXiaoRainRatingList: CfUserRatingItem[] = [];
  Allen3RatingList: CfUserRatingItem[] = [];
  CustomRatingList: CfUserRatingItem[] = [];

  customName = '';

  constructor(private cfapi: CodeforcesApiService) {
  }

  ngOnInit(): void {
    this.cfapi.getUserRating('Cro-Marmot').then((ret) => {
      this.CroMarmotRatingList = ret.result;
    });
    this.cfapi.getUserRating('YeXiaoRain').then((ret) => {
      this.YeXiaoRainRatingList = ret.result;
    });
    this.cfapi.getUserRating('Allen_3').then((ret) => {
      this.Allen3RatingList = ret.result;
    });
  }

  queryCustom(): void{
    if (this.customName === '') {
      return;
    }
    this.cfapi.getUserRating(this.customName).then((ret) => {
      this.CustomRatingList = ret.result;
    });
  }
}

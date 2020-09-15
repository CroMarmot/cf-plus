import {Component, OnInit} from '@angular/core';
import CroMarmotData from './user';
import {Date2GR, YearData} from '../../model/models';
import {intDiv, nextDayNumber, timestamp2number} from '../../js/utils';
import {StatisticsService} from './statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less']
})
export class StatisticsComponent implements OnInit {
  public userName = 'Cro-Marmot';
  private userData = [];
  public errorReason = '';
  public searching = false;
  public greenRed: YearData[] = [];
  private statisticsService: StatisticsService;

  constructor(statisticsService: StatisticsService) {
    this.statisticsService = statisticsService;
  }

  ngOnInit(): void {

  }

  async getData(): Promise<void> {
    this.searching = true;
    // const url = 'https://codeforces.com/api/user.status?handle=' + this.userName
    // fetch(url)
    //   .then(r => r.json())

    //   .then((value) => {
    const value = CroMarmotData;
    this.userData = value.result;
    this.userData = (await this.statisticsService.getUserData(this.userName)).result;

    this.searching = false;

    // }).catch((reason) => {
    //   this.searching = false
    //   this.errorReason = `未找到结果(${reason})`
    // })
    this.greenRed = this.calcGreenRed();
  }

  calcGreenRed(): YearData[] {
    const d2ggMap: Map<number, Date2GR> = new Map(null);
    if (this.userData.length === 0) {
      return [];
    }
    const todayDate = timestamp2number(new Date().getTime()); // TODO
    let minDate = todayDate;
    this.userData.forEach((raw) => {
      if (typeof raw.author.startTimeSeconds === 'undefined') {
        return;
      }
      const key = timestamp2number(raw.author.startTimeSeconds * 1000);
      const record = d2ggMap.has(key) ? d2ggMap.get(key) : (new Date2GR(key));
      d2ggMap.set(key, record.addResult(raw.verdict));
      minDate = Math.min(minDate, key);
    });
    // 开始年的一月一日
    minDate = intDiv(minDate, 10000) * 10000 + 101;
    let year = 1970;
    let dateList = [];
    const ret: YearData[] = [];
    for (let i = minDate; i <= todayDate; i = nextDayNumber(i)) {
      const pushData = d2ggMap.has(i) ? d2ggMap.get(i) : (new Date2GR(i));
      if (intDiv(pushData.day, 10000) !== year) {
        if (dateList.length !== 0) {
          ret.push({year, dateList});
        }
        dateList = [];
        year = intDiv(pushData.day, 10000);
      }
      dateList.push(pushData);
    }
    if (dateList.length !== 0) {
      ret.push({year, dateList});
    }
    return ret;
  }

  // filters: {
  //   'formatDate': (value) => {
  //     if (value) {
  //       return dateParse(value * 1000).join(' ')
  //     }
  //   }
  // },
}

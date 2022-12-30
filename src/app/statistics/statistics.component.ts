import { Component, OnDestroy, OnInit } from '@angular/core';
import { Date2GR, YearData } from '../../model/models';
import { intDiv, nextDayNumber, timestamp2number } from '../../js/utils';
import { CodeforcesApiService } from '../../services/codeforces-api.service';
import { UserStatus } from '../../model/response';
import { ActivatedRoute } from '@angular/router';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { year2startend } from '../utils/year2startend';
import { Subject } from 'rxjs';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less'],
})
export class StatisticsComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  yearControl: UntypedFormControl = new UntypedFormControl('valid', [
    Validators.pattern(/^20\d\d$/),
  ]);

  userName = 'Cro-Marmot';
  userData: UserStatus[] = [];
  errorReason = '';
  searching = false;
  greenRed: YearData[] = [];

  constructor(
    private route: ActivatedRoute,
    private codeforcesApiService: CodeforcesApiService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        takeUntil(this.destroy$),
        tap(({ year }) => this.yearControl.setValue(year || '')),
        filter(({ handle }) => !!handle),
        tap(({ handle }) => (this.userName = handle)),
        map((r) => ({ handle: r.handle, year: year2startend(r.year) }))
      )
      .subscribe((r) => {
        // queryOb$.next(r);
      });
  }

  async getData(): Promise<void> {
    this.searching = true;
    this.userData = (
      await this.codeforcesApiService.getUserStatus(this.userName)
    ).result;
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
    console.log(this.userData[0]);
    this.userData.forEach((raw) => {
      if (typeof raw.creationTimeSeconds === 'undefined') {
        return;
      }
      const key = timestamp2number(raw.creationTimeSeconds * 1000);
      const record = d2ggMap.has(key) ? d2ggMap.get(key) : new Date2GR(key);
      d2ggMap.set(key, record.addResult(raw.verdict));
      minDate = Math.min(minDate, key);
    });
    // 开始年的一月一日
    minDate = intDiv(minDate, 10000) * 10000 + 101;
    let year = 1970;
    let dateList = [];
    const ret: YearData[] = [];
    for (let i = minDate; i <= todayDate; i = nextDayNumber(i)) {
      const pushData = d2ggMap.has(i) ? d2ggMap.get(i) : new Date2GR(i);
      if (intDiv(pushData.day, 10000) !== year) {
        if (dateList.length !== 0) {
          ret.push({ year, dateList });
        }
        dateList = [];
        year = intDiv(pushData.day, 10000);
      }
      dateList.push(pushData);
    }
    if (dateList.length !== 0) {
      ret.push({ year, dateList });
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

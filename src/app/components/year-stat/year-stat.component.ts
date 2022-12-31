import { Component, Input, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Date2GR, YearData } from 'src/app/model/models';
import { Submission } from 'src/app/model/api/Submission';
import { intDiv, nextDayNumber, timestamp2number } from 'src/app/utils/utils';

@Component({
  selector: 'app-year-stat',
  templateUrl: './year-stat.component.html',
  styleUrls: ['./year-stat.component.less'],
})
export class YearStatComponent implements OnInit {
  userData$: ReplaySubject<Submission[]> = new ReplaySubject(1);
  yearsResult: YearData[] = [];

  @Input() set userStatusResult(result: Submission[]) {
    if (typeof result !== 'undefined') {
      this.userData$.next(result);
    }
  }

  ngOnInit(): void {
    this.userData$
      .pipe(
        tap((data: Submission[]) => {
          // console.log(`years result called len = ${data.length}`);
          // collect as map
          const d2ggMap: Map<number, Date2GR> = new Map(null);
          if (data.length === 0) {
            return [];
          }
          const todayDate = timestamp2number(new Date().getTime()); // TODO
          let minDate = todayDate;
          let maxDate = 19700101;
          data.forEach((raw) => {
            if (typeof raw.creationTimeSeconds === 'undefined') {
              return;
            }
            const key = timestamp2number(raw.creationTimeSeconds * 1000);
            const record = d2ggMap.has(key)
              ? d2ggMap.get(key)
              : new Date2GR(key);
            d2ggMap.set(key, record.addResult(raw.verdict));
            minDate = Math.min(minDate, key);
            maxDate = Math.max(maxDate, key);
          });

          // 开始年的一月一日
          minDate = intDiv(minDate, 10000) * 10000 + 101; // 19xx0101
          maxDate = intDiv(maxDate, 10000) * 10000 + 1231; // 19xx1231
          let year = 1970;
          let yd = new YearData(1970);
          const ret: YearData[] = [];
          for (let i = minDate; i <= maxDate; i = nextDayNumber(i)) {
            const pushData = d2ggMap.has(i) ? d2ggMap.get(i) : new Date2GR(i);
            if (intDiv(pushData.day, 10000) !== year) {
              if (yd.weekList.length !== 0) {
                ret.push(yd);
              }
              year = intDiv(pushData.day, 10000);
              yd = new YearData(year);
            }
            yd.add(pushData);
          }
          if (yd.weekList.length !== 0) {
            ret.push(yd);
          }
          this.yearsResult = ret;
        })
      )
      .subscribe();
  }
}

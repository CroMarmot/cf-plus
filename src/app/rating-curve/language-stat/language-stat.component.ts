import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {EChartOption, ECharts} from 'echarts';
import {combineLatest, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

interface LanguageMap {
  programmingLanguage: string;
}

@Component({
  selector: 'app-language-stat',
  templateUrl: './language-stat.component.html',
  styleUrls: ['./language-stat.component.less']
})
export class LanguageStatComponent implements OnInit, OnDestroy {
  // track the page life
  private destroyed$ = new Subject<void>();

  userStatus$ = new Subject<LanguageMap[]>();
  eChartInstance$ = new Subject<ECharts>();

  chartOption: EChartOption = {
    title: {
      text: 'Languages',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
      data: []
    },
    series: [
      {
        name: 'language',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  @Input() set userStatusResult(result: LanguageMap[]) {
    if (typeof result !== 'undefined') {
      this.userStatus$.next(result);
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    combineLatest([this.userStatus$, this.eChartInstance$])
      .pipe(takeUntil(this.destroyed$))
      .subscribe(([result, eChartIns]) => {
        this.updateLanguageGraph(result, eChartIns);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onChartInit(ec): void {
    this.eChartInstance$.next(ec);
  }

  updateLanguageGraph(result: LanguageMap[], eChartIns: ECharts): void {
    if (result.length === 0) {
      return;
    }
    const languages: { [key: string]: number; } = {};
    for (const item of Object.values(result)) {
      if (typeof languages[item.programmingLanguage] === 'undefined') {
        languages[item.programmingLanguage] = 0;
      }
      languages[item.programmingLanguage]++;
    }
    const languagesDataList: { name: string, value: number }[] = [];
    for (const [name, value] of Object.entries(languages)) {
      languagesDataList.push({name, value});
    }
    languagesDataList.sort((v0, v1) => v1.value - v0.value);
    const chartOption: EChartOption = this.chartOption;
    (chartOption.legend as EChartOption.Legend).data = languagesDataList.map(v => v.name);
    (chartOption.series as EChartOption.SeriesPie)[0].data = languagesDataList;

    eChartIns.setOption(chartOption);
  }

}

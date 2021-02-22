import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {EChartOption, ECharts} from 'echarts';
import {combineLatest, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

interface VerdictMap {
  verdict: string;
}

@Component({
  selector: 'app-verdicts-stat',
  templateUrl: './verdicts-stat.component.html',
  styleUrls: ['./verdicts-stat.component.less']
})
export class VerdictsStatComponent implements OnInit, OnDestroy {

  // track the page life
  private destroyed$ = new Subject<void>();

  userStatus$ = new Subject<VerdictMap[]>();
  eChartInstance$ = new Subject<ECharts>();

  chartOption: EChartOption = {
    title: {
      text: 'Verdicts',
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
        name: 'verdicts',
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

  @Input() set userStatusResult(result: VerdictMap[]) {
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
        this.updateVerdictGraph(result, eChartIns);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onChartInit(ec): void {
    this.eChartInstance$.next(ec);
  }

  updateVerdictGraph(result: VerdictMap[], eChartIns: ECharts): void {
    // if (result.length === 0) {
    //   return;
    // }
    const verdicts: { [key: string]: number; } = {};
    for (const item of Object.values(result)) {
      if (typeof verdicts[item.verdict] === 'undefined') {
        verdicts[item.verdict] = 0;
      }
      verdicts[item.verdict]++;
    }
    const verdictsDataList: { name: string, value: number }[] = [];
    for (const [name, value] of Object.entries(verdicts)) {
      verdictsDataList.push({name, value});
    }
    verdictsDataList.sort((v0, v1) => v1.value - v0.value);
    const chartOption: EChartOption = this.chartOption;
    (chartOption.legend as EChartOption.Legend).data = verdictsDataList.map(v => v.name);
    (chartOption.series as EChartOption.SeriesPie)[0].data = verdictsDataList;

    eChartIns.setOption(chartOption);
  }
}

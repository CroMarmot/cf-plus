import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Subject} from 'rxjs';
import {ECharts, EChartOption} from 'echarts';
import {takeUntil} from 'rxjs/operators';

interface RatingMap {
  verdict: string;
  problem: {
    contestId: string,
    rating: string,
    index: string,
  };
}

@Component({
  selector: 'app-rating-stat',
  templateUrl: './rating-stat.component.html',
  styleUrls: ['./rating-stat.component.less']
})
export class RatingStatComponent implements OnInit, OnDestroy {

  // track the page life
  private destroyed$ = new Subject<void>();

  levelsMapArrOb$ = new Subject<RatingMap[]>();
  eChartInstance$ = new Subject<ECharts>();

  chartOption: EChartOption = {
    title: {
      text: 'Ratings',
      left: 'center'
    },
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: [],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'solved',
        type: 'bar',
        barWidth: '60%',
        data: [],
      }
    ]
  };


  @Input() set userStatusResult(result: RatingMap[]) {
    if (typeof result !== 'undefined') {
      this.levelsMapArrOb$.next(result);
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    combineLatest([this.levelsMapArrOb$, this.eChartInstance$])
      .pipe(takeUntil(this.destroyed$))
      .subscribe(([result, eChartIns]) => {
        this.updateRatingGraph(result, eChartIns);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onChartInit(eChartsIns: ECharts): void {
    this.eChartInstance$.next(eChartsIns);
  }

  updateRatingGraph(result: RatingMap[], eChartsIns: ECharts): void {
    if (result.length === 0) {
      return;
    }
    // [problem id] = {};
    const problems: { [key: string]: { failed: number, solved: number } } = {};
    result.forEach(item => {
      const problemId = `${item.problem.contestId}-${item.problem.index}`;
      if (typeof problems[problemId] === 'undefined') {
        // first submission of a problem
        problems[problemId] = {
          failed: 0,
          solved: 0 // We also want to save how many submission got AC, a better name would have been number_of_ac
        };
      }
    });
    const solvedRating: { [key: string]: number; } = {};
    result.forEach(item => {
      const problemId = `${item.problem.contestId}-${item.problem.index}`;
      if (item.verdict === 'OK') {
        problems[problemId].solved++;
        if (problems[problemId].solved === 1) {
          // some thing like D1 D2
          const pIdx = item.problem.rating;
          if (typeof pIdx === 'undefined') {
            return ;
          }
          if (typeof solvedRating[pIdx] === 'undefined') {
            solvedRating[pIdx] = 0;
          }
          solvedRating[pIdx]++;
        }
      }
    });

    const solvedDataList: { name: string, value: number }[] = [];
    for (const [name, value] of Object.entries(solvedRating)) {
      solvedDataList.push({name, value});
    }
    solvedDataList.sort((v0, v1) => Number(v1.name) > Number(v0.name) ? -1 : 1);
    const chartOption: EChartOption = this.chartOption;
    chartOption.xAxis[0].data = solvedDataList.map(v => v.name);
    (chartOption.series as EChartOption.SeriesPie)[0].data = solvedDataList.map(v => v.value);

    eChartsIns.setOption(chartOption);
  }

}

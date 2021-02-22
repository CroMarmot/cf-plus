import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {EChartOption, ECharts} from 'echarts';
import {combineLatest, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

interface TagsMap {
  verdict: string;
  problem: {
    contestId: string,
    index: string,
    tags: string[]
  };
}

@Component({
  selector: 'app-tags-stat',
  templateUrl: './tags-stat.component.html',
  styleUrls: ['./tags-stat.component.less']
})
export class TagsStatComponent implements OnInit, OnDestroy {
  // track the page life
  private destroyed$ = new Subject<void>();

  tagsMapArrOb$ = new Subject<TagsMap[]>();
  eChartInstance$ = new Subject<ECharts>();

  chartOption: EChartOption = {
    title: {
      text: 'Tags (Only Accept)',
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
        name: 'tags',
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


  @Input() set userStatusResult(result: TagsMap[]) {
    if (typeof result !== 'undefined') {
      this.tagsMapArrOb$.next(result);
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    combineLatest([this.tagsMapArrOb$, this.eChartInstance$])
      .pipe(takeUntil(this.destroyed$))
      .subscribe(([result, eChartIns]) => {
        this.updateVerdictGraph(result, eChartIns);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onChartInit(eChartsIns: ECharts): void {
    this.eChartInstance$.next(eChartsIns);
  }

  updateVerdictGraph(result: TagsMap[], eChartsIns: ECharts): void {
    if (result.length === 0) {
      return;
    }
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
    const solvedTags: { [key: string]: number; } = {};
    const failedTags: { [key: string]: number; } = {};
    result.forEach(item => {
      const problemId = `${item.problem.contestId}-${item.problem.index}`;
      if (item.verdict === 'OK') {
        problems[problemId].solved++;
        if (problems[problemId].solved === 1) {
          item.problem.tags.forEach((tag) => {
            if (typeof solvedTags[tag] === 'undefined') {
              solvedTags[tag] = 0;
            }
            solvedTags[tag]++;
          });
        }
      } else {
        problems[problemId].failed++;
        if (problems[problemId].failed === 1) {
          item.problem.tags.forEach((tag) => {
            if (typeof failedTags[tag] === 'undefined') {
              failedTags[tag] = 0;
            }
            failedTags[tag]++;
          });
        }
      }
    });

    const solvedDataList: { name: string, value: number }[] = [];
    for (const [name, value] of Object.entries(solvedTags)) {
      solvedDataList.push({name, value});
    }
    solvedDataList.sort((v0, v1) => v1.value - v0.value);
    const chartOption: EChartOption = this.chartOption;
    (chartOption.legend as EChartOption.Legend).data = solvedDataList.map(v => v.name);
    (chartOption.series as EChartOption.SeriesPie)[0].data = solvedDataList;
    // TODO failed pie chart

    eChartsIns.setOption(chartOption);
  }

}

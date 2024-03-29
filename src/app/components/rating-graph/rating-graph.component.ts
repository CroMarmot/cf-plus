import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EChartsOption, ECharts, SeriesOption } from 'echarts';
import { combineLatest, of, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { CfUserRatingItem } from 'src/app/model/CfUserRatingItem';
import { CodeforcesStaticService } from 'src/app/services/codeforces-static.service';

const COLORS = CodeforcesStaticService.getColors();

@Component({
  selector: 'app-rating-graph',
  templateUrl: './rating-graph.component.html',
  styleUrls: ['./rating-graph.component.less'],
})
export class RatingGraphComponent implements OnInit, OnDestroy {
  // track the page life
  private destroyed$ = new Subject<void>();

  ratingGraphResult$ = new Subject<CfUserRatingItem[]>();
  eChartInstance$ = new Subject<ECharts>();

  chartOption: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    xAxis: {
      type: 'category',
      data: [],
    },
    yAxis: {
      type: 'value',
      scale: true,
    },
    series: [
      {
        data: [],
        type: 'line',
      },
    ],
  };

  @Input() set userRatingList(value: CfUserRatingItem[]) {
    if (typeof value !== 'undefined') {
      this.ratingGraphResult$.next(value);
    }
  }

  constructor() {}

  ngOnInit(): void {
    const vMap = {
      top: 10,
      right: 10,
      pieces: [],
    };
    COLORS.forEach((v) => {
      vMap.pieces.push({
        gt: v.scoreLow,
        lte: v.scoreHigh,
        color: v.color,
      });
    });
    this.chartOption.visualMap = [vMap];

    combineLatest([this.ratingGraphResult$, this.eChartInstance$])
      .pipe(
        takeUntil(this.destroyed$),
        switchMap(([result, eChartIns]) =>
          of(this.updateRatingGraph(result, eChartIns))
        )
      )
      .subscribe(
        ({ ins, options }: { ins: ECharts; options: EChartsOption }) => {
          ins.setOption(options);
        }
      );
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onChartInit(eChartsIns): void {
    this.eChartInstance$.next(eChartsIns);
  }

  updateRatingGraph(
    result: CfUserRatingItem[],
    eChartsIns: ECharts
  ): { ins: ECharts; options: EChartsOption } {
    const chartOption: EChartsOption = this.chartOption;
    const xAxisData = [];
    result.forEach((value, index) => {
      return xAxisData.push(index);
    });
    (chartOption.xAxis as any).data = xAxisData; // TODO fix

    const seriesData: number[] = [];
    result.forEach((v) => {
      seriesData.push(v.newRating);
    });
    (chartOption.series as SeriesOption[])[0].data = seriesData;
    return { ins: eChartsIns, options: chartOption };
  }
}

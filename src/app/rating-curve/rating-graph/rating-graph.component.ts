import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CodeforcesStaticService} from '../../../services/codeforces-static.service';
import {EChartOption, ECharts} from 'echarts';
import {CfUserRatingItem} from '../../../model/CfUserRatingItem';
import {combineLatest, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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

  chartOption: EChartOption = {
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

  constructor() {
  }

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
      .pipe(takeUntil(this.destroyed$))
      .subscribe(([result, eChartIns]) => {
        this.updateRatingGraph(result, eChartIns);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onChartInit(eChartsIns): void {
    this.eChartInstance$.next(eChartsIns);
  }

  updateRatingGraph(result: CfUserRatingItem[], eChartsIns: ECharts): void {
    if (result.length === 0) {
      return;
    }
    const chartOption: EChartOption = this.chartOption;
    const xAxisData = [];
    result.forEach((value, index) => {
      return xAxisData.push(index);
    });
    (chartOption.xAxis as EChartOption.XAxis).data = xAxisData;

    const seriesData: number[] = [];
    result.forEach((v) => {
      seriesData.push(v.newRating);
    });
    (chartOption.series as EChartOption.SeriesLines)[0].data = seriesData;

    eChartsIns.setOption(chartOption);
  }
}

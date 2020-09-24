import { Component, Input, OnInit } from '@angular/core';
import { CodeforcesStaticService } from '../../../services/codeforces-static.service';
import { EChartOption } from 'echarts';
import { CfUserRatingItem } from '../../../model/CfUserRatingItem';

const COLORS = CodeforcesStaticService.getColors();

@Component({
  selector: 'app-rating-graph',
  templateUrl: './rating-graph.component.html',
  styleUrls: ['./rating-graph.component.less'],
})
export class RatingGraphComponent implements OnInit {
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

  private echartsInstance = null;
  private newChartOption: EChartOption = null;

  private userRatingListPrivate: CfUserRatingItem[];

  @Input() set userRatingList(value: CfUserRatingItem[]) {
    this.userRatingListPrivate = value;
    this.updateRatingGraph(this.userRatingListPrivate);
  }

  get userRatingList(): CfUserRatingItem[] {
    return this.userRatingListPrivate;
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
  }

  onChartInit(ec): void{
    if (this.echartsInstance === null) {
      this.echartsInstance = ec;
      if (this.newChartOption !== null) {
        this.echartsInstance.setOption(this.newChartOption);
        this.newChartOption = null;
      }
    }
  }

  updateRatingGraph(data: CfUserRatingItem[]): void{
    if (data.length === 0) {
      return;
    }
    const chartOption: EChartOption = this.chartOption;
    const xAxisData = [];
    for (let i = 0; i < data.length; i++) {
      xAxisData.push(i);
    }
    (chartOption.xAxis as EChartOption.XAxis).data = xAxisData;

    const seriesData: number[] = [];
    data.forEach((v) => {
      seriesData.push(v.newRating);
    });
    (chartOption.series as EChartOption.SeriesLines)[0].data = seriesData;

    // TODO fix echartsInstance 加载时间晚的问题 Observable?
    if (this.echartsInstance !== null) {
      this.echartsInstance.setOption(chartOption);
    } else {
      this.newChartOption = chartOption;
    }
  }
}

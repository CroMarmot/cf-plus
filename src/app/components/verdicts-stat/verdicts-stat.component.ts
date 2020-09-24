import {Component, Input, OnInit} from '@angular/core';
import {EChartOption} from 'echarts';

interface VerdictMap {
  verdict: string;
}

@Component({
  selector: 'app-verdicts-stat',
  templateUrl: './verdicts-stat.component.html',
  styleUrls: ['./verdicts-stat.component.less']
})
export class VerdictsStatComponent implements OnInit {
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

  private echartsInstance = null;
  private newChartOption: EChartOption = null;

  @Input() set userStatusResult(result: VerdictMap[]) {
    this.updateVerdictGraph(result);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onChartInit(ec): void {
    if (this.echartsInstance === null) {
      this.echartsInstance = ec;
      if (this.newChartOption !== null) {
        this.echartsInstance.setOption(this.newChartOption);
        this.newChartOption = null;
      }
    }
  }

  updateVerdictGraph(result: VerdictMap[]): void {
    if (result.length === 0) {
      return;
    }
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

    // TODO fix echartsInstance 加载时间晚的问题 Observable?
    if (this.echartsInstance !== null) {
      this.echartsInstance.setOption(chartOption);
    } else {
      this.newChartOption = chartOption;
    }
  }
}

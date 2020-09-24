import {Component, Input, OnInit} from '@angular/core';
import {EChartOption} from 'echarts';

interface LanguageMap {
  programmingLanguage: string;
}

@Component({
  selector: 'app-language-stat',
  templateUrl: './language-stat.component.html',
  styleUrls: ['./language-stat.component.less']
})
export class LanguageStatComponent implements OnInit {
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

  private echartsInstance = null;
  private newChartOption: EChartOption = null;

  @Input() set userStatusResult(result: LanguageMap[]) {
    this.updateLanguageGraph(result);
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

  updateLanguageGraph(result: LanguageMap[]): void {
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

    // TODO fix echartsInstance 加载时间晚的问题 Observable?
    if (this.echartsInstance !== null) {
      this.echartsInstance.setOption(chartOption);
    } else {
      this.newChartOption = chartOption;
    }
  }

}

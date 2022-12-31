import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app-material.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ReportComponent } from './pages/report/report.component';
import { RatingGraphComponent } from './components/rating-graph/rating-graph.component';
import { UserRatingComponent } from './components/user-rating/user-rating.component';
import { VerdictsStatComponent } from './components/verdicts-stat/verdicts-stat.component';
import { LanguageStatComponent } from './components/language-stat/language-stat.component';
import { TagsStatComponent } from './components/tags-stat/tags-stat.component';
import { LevelStatComponent } from './components/level-stat/level-stat.component';
import { RatingStatComponent } from './components/rating-stat/rating-stat.component';
import { StatTableComponent } from './components/stat-table/stat-table.component';
import { FetchingStatComponent } from './components/fetching-stat/fetching-stat.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharePageComponent } from './pages/share-page/share-page.component';
import { YearStatComponent } from './components/year-stat/year-stat.component';

import { NgxEchartsModule } from 'ngx-echarts';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
// Import bar charts, all with Chart suffix
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  LegendComponent,
} from 'echarts/components';
// Import the Canvas renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';
import { ProblemReportCardComponent } from './components/problem-report-card/problem-report-card.component';
import { ContestReportCardComponent } from './components/contest-report-card/contest-report-card.component';
// import 'echarts/theme/macarons.js';

// https://github.com/xieziyu/ngx-echarts#treeshaking-custom-build
// https://echarts.apache.org/en/cheat-sheet.html
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  VisualMapComponent,
  BarChart,
  PieChart,
  LineChart,
  CanvasRenderer,
]);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ReportComponent,
    RatingGraphComponent,
    UserRatingComponent,
    VerdictsStatComponent,
    LanguageStatComponent,
    TagsStatComponent,
    LevelStatComponent,
    RatingStatComponent,
    StatTableComponent,
    FetchingStatComponent,
    MainPageComponent,
    SharePageComponent,
    YearStatComponent,
    ProblemReportCardComponent,
    ContestReportCardComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({ echarts }),
    AppMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StatisticsComponent } from './statistics/statistics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ReportComponent } from './report/report.component';
import { RatingGraphComponent } from './components/rating-graph/rating-graph.component';
import { UserRatingComponent } from './components/user-rating/user-rating.component';
import { VerdictsStatComponent } from './components/verdicts-stat/verdicts-stat.component';
import { LanguageStatComponent } from './components/language-stat/language-stat.component';
import { TagsStatComponent } from './components/tags-stat/tags-stat.component';
import { LevelStatComponent } from './components/level-stat/level-stat.component';
import { RatingStatComponent } from './components/rating-stat/rating-stat.component';
import { StatTableComponent } from './components/stat-table/stat-table.component';
import { FetchingStatComponent } from './components/fetching-stat/fetching-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
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
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    AppMaterialModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

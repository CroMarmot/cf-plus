import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {StatisticsComponent} from './statistics/statistics.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material/app-material.module';
import {AnnualReportComponent} from './annual-report/annual-report.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {VerdictsStatComponent} from './components/verdicts-stat/verdicts-stat.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { LanguageStatComponent } from './components/language-stat/language-stat.component';
import { TagsStatComponent } from './components/tags-stat/tags-stat.component';
import { LevelStatComponent } from './components/level-stat/level-stat.component';
import { RatingStatComponent } from './components/rating-stat/rating-stat.component';
import { StatTableComponent } from './components/stat-table/stat-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    AnnualReportComponent,
    PageNotFoundComponent,
    VerdictsStatComponent,
    LanguageStatComponent,
    TagsStatComponent,
    LevelStatComponent,
    RatingStatComponent,
    StatTableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    AppMaterialModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

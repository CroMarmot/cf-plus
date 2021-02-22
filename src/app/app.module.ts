import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {StatisticsComponent} from './statistics/statistics.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material/app-material.module';
import {AnnualReportComponent} from './annual-report/annual-report.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {CodeforcesModule} from './rating-curve/codeforces.module';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    AnnualReportComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    AppMaterialModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    CodeforcesModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

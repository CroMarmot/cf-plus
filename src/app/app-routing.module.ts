import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReportComponent } from './report/report.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SharePageComponent } from './share-page/share-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: 'statistics', component: StatisticsComponent },
      { path: 'annual', component: ReportComponent },
      { path: '', redirectTo: '/statistics', pathMatch: 'full' },
    ],
  },
  { path: 'share', component: SharePageComponent },
  { path: '', redirectTo: '/statistics', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

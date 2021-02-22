import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StatisticsComponent} from './statistics/statistics.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ReportComponent} from './report/report.component';

const routes: Routes = [
  {path: 'statistics', component: StatisticsComponent},
  {path: 'annual', component: ReportComponent},
  {
    path: 'curve',
    loadChildren: () => import('./rating-curve/codeforces.module').then(mod => mod.CodeforcesModule),
    data: {preload: true},
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

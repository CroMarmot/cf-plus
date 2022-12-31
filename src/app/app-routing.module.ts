import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ReportComponent } from './pages/report/report.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharePageComponent } from './pages/share-page/share-page.component';

const routes: Routes = [
  { path: 'share', component: SharePageComponent },
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: 'annual', component: ReportComponent },
    ],
  },
  { path: '', redirectTo: '/annual', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

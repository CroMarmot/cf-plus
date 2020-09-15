import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeforcesComponent } from './codeforces.component';

const routes: Routes = [
  {
    path: '',
    component: CodeforcesComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeforcesRoutingModule {}

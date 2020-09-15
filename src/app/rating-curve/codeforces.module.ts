import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeforcesComponent} from './codeforces.component';
import {RatingGraphComponent} from './rating-graph/rating-graph.component';
import {UserRatingComponent} from './user-rating/user-rating.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {CodeforcesRoutingModule} from './codeforces-routing.module';
import {FormsModule} from '@angular/forms';
import {AppMaterialModule} from '../app-material/app-material.module';

@NgModule({
  declarations: [CodeforcesComponent, RatingGraphComponent, UserRatingComponent],
  imports: [AppMaterialModule, NgxEchartsModule.forRoot({
    /**
     * This will import all modules from echarts.
     * If you only need custom modules,
     * please refer to [Custom Build] section.
     */
    echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
  }), FormsModule, CodeforcesRoutingModule, CommonModule],
})
export class CodeforcesModule {
}

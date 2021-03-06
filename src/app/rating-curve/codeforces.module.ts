import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeforcesComponent} from './codeforces.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {CodeforcesRoutingModule} from './codeforces-routing.module';
import {FormsModule} from '@angular/forms';
import {AppMaterialModule} from '../app-material/app-material.module';
import {RatingGraphComponent} from '../components/rating-graph/rating-graph.component';
import {UserRatingComponent} from '../components/user-rating/user-rating.component';
import {VerdictsStatComponent} from '../components/verdicts-stat/verdicts-stat.component';
import {LanguageStatComponent} from '../components/language-stat/language-stat.component';
import {TagsStatComponent} from '../components/tags-stat/tags-stat.component';
import {LevelStatComponent} from '../components/level-stat/level-stat.component';
import {RatingStatComponent} from '../components/rating-stat/rating-stat.component';
import {StatTableComponent} from '../components/stat-table/stat-table.component';

@NgModule({
  declarations: [
    CodeforcesComponent,
    RatingGraphComponent,
    UserRatingComponent,
    VerdictsStatComponent,
    LanguageStatComponent,
    TagsStatComponent,
    LevelStatComponent,
    RatingStatComponent,
    StatTableComponent,
  ],
  imports: [AppMaterialModule, NgxEchartsModule.forRoot({
    /**
     * This will import all modules from echarts.
     * If you only need custom modules,
     * please refer to [Custom Build] section.
     */
    echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
  }), FormsModule, CodeforcesRoutingModule, CommonModule],
  exports: [
    CodeforcesComponent,
    RatingGraphComponent,
    UserRatingComponent,
    VerdictsStatComponent,
    LanguageStatComponent,
    TagsStatComponent,
    LevelStatComponent,
    RatingStatComponent,
    StatTableComponent,
  ]
})
export class CodeforcesModule {
}

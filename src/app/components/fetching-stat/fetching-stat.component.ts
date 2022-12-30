import { Component, Input } from '@angular/core';
import { FetchStat } from './FetchStat';

@Component({
  selector: 'app-fetching-stat',
  templateUrl: './fetching-stat.component.html',
  styleUrls: ['./fetching-stat.component.less'],
})
export class FetchingStatComponent {
  FetchStat = FetchStat;
  @Input('stat') stat!: FetchStat;
  @Input('text') text!: string;
}

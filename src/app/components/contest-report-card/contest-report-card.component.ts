import { Component, Input } from '@angular/core';
import { CfUserRatingItem } from 'src/app/model/CfUserRatingItem';

@Component({
  selector: 'app-contest-report-card',
  templateUrl: './contest-report-card.component.html',
  styleUrls: ['./contest-report-card.component.less'],
})
export class ContestReportCardComponent {
  @Input() contest: CfUserRatingItem;
  @Input() hint: string;
}

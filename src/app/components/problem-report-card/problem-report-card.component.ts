import { Component, Input } from '@angular/core';
import { ProblemAnalyzeResult } from "src/app/model/ProblemAnalyzeResult";

@Component({
  selector: 'app-problem-report-card',
  templateUrl: './problem-report-card.component.html',
  styleUrls: ['./problem-report-card.component.less'],
})
export class ProblemReportCardComponent {
  @Input() problem: ProblemAnalyzeResult;
  @Input() hint: string;
}

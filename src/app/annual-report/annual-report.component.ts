import {Component, OnInit} from '@angular/core';
import {CodeforcesApiService} from '../../services/codeforces-api.service';

@Component({
  selector: 'app-annual-report',
  templateUrl: './annual-report.component.html',
  styleUrls: ['./annual-report.component.less']
})
export class AnnualReportComponent implements OnInit {
  result: { verdict: string }[] = [];
  userName = '';

  constructor(private codeforcesApiService: CodeforcesApiService) {
  }

  ngOnInit(): void {
  }

  async getData(): Promise<void>{
    this.result = (await this.codeforcesApiService.getUserStatus(this.userName)).result;
  }
}

import {Component, OnInit} from '@angular/core';
import {CodeforcesApiService} from '../../services/codeforces-api.service';
import {UserStatus} from '../../model/response';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-annual-report',
  templateUrl: './annual-report.component.html',
  styleUrls: ['./annual-report.component.less']
})
export class AnnualReportComponent implements OnInit {
  result: UserStatus[] = [];
  userName = '';
  year = '';
  selectedYear = '';

  yearList: string[] = [];

  selected: FormControl;

  constructor(private codeforcesApiService: CodeforcesApiService) {
    const curYear = (new Date()).getFullYear();
    for (let i = 2010; i <= curYear; i++) {
      this.yearList.push(`${i}`);
    }
    this.selected = new FormControl('valid', [
      Validators.required,
      Validators.pattern(/^20\d\d$/),
    ]);
  }

  ngOnInit(): void {
  }

  async getData(): Promise<void> {
    const start = (new Date(`${Number(this.year)}-01-01`)).getTime() / 1000;
    const end = (new Date(`${Number(this.year) + 1}-01-01`)).getTime() / 1000;
    this.result = (await this.codeforcesApiService.getUserStatus(this.userName)).result.filter(item =>
      item.creationTimeSeconds >= start && item.creationTimeSeconds <= end
    );
    console.log('result:', this.result);
  }
}

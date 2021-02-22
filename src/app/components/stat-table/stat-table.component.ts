import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {UserStatus} from '../../../model/response';

@Component({
  selector: 'app-stat-table',
  templateUrl: './stat-table.component.html',
  styleUrls: ['./stat-table.component.less']
})
export class StatTableComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['name', 'value'];
  dataSource: { name: string, value: string }[] = [];
  unsolved: { name: string, url: string }[] = [];

  // track the page life
  private destroyed$ = new Subject<void>();

  userStatusMapArrOb$ = new Subject<UserStatus[]>();

  @Input() set userStatusResult(result: UserStatus[]) {
    if (typeof result !== 'undefined') {
      this.userStatusMapArrOb$.next(result);
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    this.userStatusMapArrOb$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        this.updateView(result);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  updateView(result: UserStatus[]): void {
    // if (result.length === 0) {
    //   return;
    // }
    const problems: { [key: string]: { failed: number, solved: number, attempts: number } } = {};
    result.forEach(item => {
      const problemId = `${item.problem.contestId}-${item.problem.index}`;
      if (typeof problems[problemId] === 'undefined') {
        // first submission of a problem
        problems[problemId] = {
          attempts: 0,
          failed: 0,
          solved: 0 // We also want to save how many submission got AC, a better name would have been number_of_ac
        };
      }
    });
    const solvedTags: { [key: string]: number; } = {};
    const failedTags: { [key: string]: number; } = {};
    result.forEach(item => { // don't change order
      const problemId = `${item.problem.contestId}-${item.problem.index}`;
      if (item.verdict === 'OK') {
        problems[problemId].solved++;
        problems[problemId].attempts = 1; // in time reverse order so attempts = 0
        if (problems[problemId].solved === 1) {
          item.problem.tags.forEach((tag) => {
            if (typeof solvedTags[tag] === 'undefined') {
              solvedTags[tag] = 0;
            }
            solvedTags[tag]++;
          });
        }
      } else {
        problems[problemId].failed++;
        problems[problemId].attempts++; // in time reverse order so attempts++
        if (problems[problemId].failed === 1) {
          item.problem.tags.forEach((tag) => {
            if (typeof failedTags[tag] === 'undefined') {
              failedTags[tag] = 0;
            }
            failedTags[tag]++;
          });
        }
      }
    });

    const solvedDataList: { name: string, value: number }[] = [];
    for (const [name, value] of Object.entries(solvedTags)) {
      solvedDataList.push({name, value});
    }
    solvedDataList.sort((v0, v1) => v1.value - v0.value);

    // Number of contests	101
    // Best rank	23 (1155)
    // Worst rank	6359 (1316)
    // Max up	1423 (839)
    // Max down	-173 (1316)

    // console.log('data source:', this.dataSource);

    let tried = 0; // count of distinct problems
    let solved = 0;
    let totalAttempt = 0;
    let maxAttempt = 0; // before ac + 1 || count of submit
    let maxAttemptProblem = '';
    let maxAc = 0;
    let maxAcProblem = '';
    let solvedWithOneSub = 0;
    this.unsolved = [];
    for (const [p, item] of Object.entries(problems)) {
      tried++;
      if (item.solved > 0) {
        solved++;
        totalAttempt += item.attempts;
      }
      if (item.solved === 0) {
        const [contestId, pId] = p.split('-');
        this.unsolved.push({name: p, url: `https://codeforces.com/contest/${contestId}/problem/${pId}`});
      }
      if (item.attempts > maxAttempt) {
        maxAttempt = item.attempts;
        maxAttemptProblem = p;
      }

      if (item.solved > maxAc) {
        maxAc = item.solved;
        maxAcProblem = p;
      }

      if (item.solved > 0 && item.attempts === 1) {
        solvedWithOneSub++;
      }
    }
    this.dataSource = [];
    if (result.length > 0) {
      this.dataSource.push({name: 'Tried', value: `${tried}`});
      this.dataSource.push({name: 'Solved', value: `${solved}`});
      this.dataSource.push({name: 'Average attempts(AC)', value: (totalAttempt / solved).toFixed(2)});
      this.dataSource.push({name: 'Max attempts', value: `${maxAttempt}(${maxAttemptProblem})`});
      if (solved) {
        this.dataSource = this.dataSource.concat({
          name: 'Solved with one submission',
          value: `${solvedWithOneSub}(${(solvedWithOneSub / solved * 100).toFixed(2)}%)`
        });
      }
    }
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeforcesApiService } from '../../services/codeforces-api.service';
import { UntypedFormControl, Validators } from '@angular/forms';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';
import { year2startend } from '../utils/year2startend';
import { FetchStat } from '../components/fetching-stat/FetchStat';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less'],
})
export class ReportComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();

  yearControl: UntypedFormControl = new UntypedFormControl('valid', [
    Validators.pattern(/^20\d\d$/),
  ]);

  FetchStat = FetchStat;

  ratingFetching: FetchStat = FetchStat.Before;
  statusFetching: FetchStat = FetchStat.Before;

  userName = '';
  queryUserName = '';

  userRating = [];
  userStatus = [];
  yearList: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private codeforcesApiService: CodeforcesApiService
  ) {
    const curYear = new Date().getFullYear();
    for (let i = curYear; i >= 2010; i--) {
      this.yearList.push(`${i}`);
    }
  }

  ngOnInit(): void {
    const queryOb$ = new ReplaySubject<{
      handle: string;
      year: { start: number; end: number };
    }>(1);
    this.route.queryParams
      .pipe(
        takeUntil(this.destroy$),
        tap(({ year }) => this.yearControl.setValue(year || '')),
        // filter(({ handle }) => !!handle),
        tap(({ handle }) => (this.userName = handle)),
        map((r) => ({ handle: r.handle, year: year2startend(r.year) }))
      )
      .subscribe((r) => {
        queryOb$.next(r);
      });

    // TODO how to merge into one with switchMap
    queryOb$
      .pipe(
        tap(({ handle }) => (this.queryUserName = handle)),
        switchMap(async ({ handle, year }) => {
          this.userRating = [];
          this.ratingFetching = FetchStat.Fetching;
          return {
            ret: await this.codeforcesApiService.getUserRating(handle),
            year,
          };
        })
      )
      .subscribe(({ ret, year: { start, end } }) => {
        this.ratingFetching = FetchStat.Success;
        this.userRating = ret.result.filter(
          (item) =>
            item.ratingUpdateTimeSeconds * 1000 >= start &&
            item.ratingUpdateTimeSeconds * 1000 <= end
        );
      });
    queryOb$
      .pipe(
        switchMap(async ({ handle, year }) => {
          this.userStatus = [];
          this.statusFetching = FetchStat.Fetching;
          return {
            ret: await this.codeforcesApiService.getUserStatus(handle),
            year,
          };
        })
      )
      .subscribe(({ ret, year: { start, end } }) => {
        this.statusFetching = FetchStat.Success;
        this.userStatus = ret.result.filter(
          (item) =>
            item.creationTimeSeconds * 1000 >= start &&
            item.creationTimeSeconds * 1000 <= end
        );
      });
  }

  goButtonClick(): void {
    this.router.navigate([], {
      queryParams: {
        handle: this.userName,
        year: this.yearControl.value || undefined,
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

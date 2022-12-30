import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CodeforcesApiService} from '../../services/codeforces-api.service';
import {UntypedFormControl, Validators} from '@angular/forms';
import {filter, map, switchMap, takeUntil, tap} from 'rxjs/operators';
import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';

function year2startend(year: string): { start, end } {
  let start = 2000;
  let end = (new Date()).getFullYear() + 1;
  if (/^\d{4}$/.test(year)) {
    start = Number(year);
    end = Number(year) + 1;
  }
  return {
    start: (new Date(`${Number(start)}-01-01`)).getTime(),
    end: (new Date(`${Number(end)}-01-01`)).getTime()
  };
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less']
})
export class ReportComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  yearControl: UntypedFormControl = new UntypedFormControl('valid', [
    Validators.pattern(/^20\d\d$/),
  ]);

  ratingFetching = false;
  statusFetching = false;

  userName = '';

  userRating = [];
  userStatus = [];
  yearList: string[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private codeforcesApiService: CodeforcesApiService) {

    const curYear = (new Date()).getFullYear();
    for (let i = curYear; i >= 2010; i--) {
      this.yearList.push(`${i}`);
    }
  }

  ngOnInit(): void {
    const queryOb$ = new ReplaySubject(1);
    this.route.queryParams.pipe(
      takeUntil(this.destroy$),
      tap(({year}) => this.yearControl.setValue(year || '')),
      filter(({handle}) => !!handle),
      tap(({handle}) => this.userName = handle),
      map(r => ({handle: r.handle, year: year2startend(r.year)}))
    ).subscribe((r) => {
      queryOb$.next(r);
    });

    // TODO how to merge into one with switchMap
    queryOb$.pipe(switchMap(async ({handle, year}) => {
      this.userRating = [];
      this.ratingFetching = true;
      return {ret: await this.codeforcesApiService.getUserRating(handle), year};
    })).subscribe(({ret, year: {start, end}}) => {
      this.ratingFetching = false;
      this.userRating = ret.result.filter(item =>
        item.ratingUpdateTimeSeconds * 1000 >= start && item.ratingUpdateTimeSeconds * 1000 <= end
      );
    });
    queryOb$.pipe(switchMap(async ({handle, year}) => {
      this.userStatus = [];
      this.statusFetching = true;
      return {ret: await this.codeforcesApiService.getUserStatus(handle), year};
    })).subscribe(({ret, year: {start, end}}) => {
      this.statusFetching = false;
      this.userStatus = ret.result.filter(item =>
        item.creationTimeSeconds * 1000 >= start && item.creationTimeSeconds * 1000 <= end
      );
    });
  }

  Go(): void {
    this.router.navigate([], {
      queryParams: {
        handle: this.userName,
        year: this.yearControl.value || undefined
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  map,
  ReplaySubject,
  Subject,
  switchMap,
  takeUntil,
  tap,
  zip,
} from 'rxjs';
import { FetchStat } from 'src/app/components/fetching-stat/FetchStat';
import { CfUserRatingItem } from 'src/app/model/CfUserRatingItem';
import { Submission } from 'src/app/model/api/Submission';
import { CodeforcesApiService } from 'src/app/services/codeforces-api.service';
import {
  ratingChange,
  filterYear as userRatingFilterYear,
} from 'src/app/utils/user-rating';
import {
  analyzeAcIndex,
  analyzeAcRating,
  analyzeAcTags,
  analyzeLanguage,
  analyzeProblem,
  analyzeVerdict,
  contestCount,
  FieldCountAnalyzeResult,
  participantTypeString,
  userStatusFilterParticipantType,
  userStatusFilterYear,
} from 'src/app/utils/user-status';
import { ProblemAnalyzeResult } from 'src/app/model/ProblemAnalyzeResult';
import { getYearList } from '../../utils/getYearList';

const participantTypeList = [
  'RATED',
  'UNRATED',
  'CONTESTANT',
  'PRACTICE',
  'VIRTUAL',
  'MANAGER',
  'OUT_OF_COMPETITION',
];

const fetchStatString = {
  [FetchStat.Before]: 'Before',
  [FetchStat.Fetching]: 'Fetching',
  [FetchStat.Failed]: 'Failed',
  [FetchStat.Success]: 'Success',
};

function secondsToHHMMSS(seconds: number): string {
  return new Date(seconds * 1000).toISOString().slice(11, 19);
}

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.less'],
})
export class SharePageComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();

  yearList: string[] = getYearList();
  participantTypeList = participantTypeList;
  queryForm = new FormGroup({
    handle: new FormControl(''),
    year: new FormControl(''),
    participantType: new FormControl(''),
  });

  secondsToHHMMSS = secondsToHHMMSS;

  FetchStat = FetchStat;
  fetchStatString = fetchStatString;
  ratingFetching: FetchStat = FetchStat.Before;
  statusFetching: FetchStat = FetchStat.Before;

  // filtered
  userRatingFiltered$ = new ReplaySubject<CfUserRatingItem[]>(1);
  userStatusFiltered$ = new ReplaySubject<Submission[]>(1);

  view = {
    ratingChange: 0,
    contestCount: 0,
    submissionCount: 0,
    ACCount: 0,
    oneSubmissionSolved: 0,
    maxAttemptAC: [] as ProblemAnalyzeResult[],
    fastAC: [] as ProblemAnalyzeResult[],
    latestAC: [] as ProblemAnalyzeResult[],
    hardestAC: [] as ProblemAnalyzeResult[],
    unsolved: [] as ProblemAnalyzeResult[],

    rankHigh: [] as CfUserRatingItem[],
    rankLow: [] as CfUserRatingItem[],
    ratingMaxInc: [] as CfUserRatingItem[],
    ratingMaxDec: [] as CfUserRatingItem[],

    verdict: [] as FieldCountAnalyzeResult[],
    acTags: [] as FieldCountAnalyzeResult[],
    firstAcLanguage: [] as FieldCountAnalyzeResult[],
    acRating: [] as FieldCountAnalyzeResult[],
    acIndex: [] as FieldCountAnalyzeResult[],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private codeforcesApiService: CodeforcesApiService
  ) {}

  ngOnInit(): void {
    // api return
    const userRating$ = new ReplaySubject<CfUserRatingItem[]>(1);
    const userStatus$ = new ReplaySubject<Submission[]>(1);

    const query$ = new ReplaySubject<{
      handle: string;
      year: string;
      participantType: participantTypeString;
    }>(1);

    this.route.queryParams
      .pipe(
        takeUntil(this.destroy$),
        tap(({ year }) => this.queryForm.patchValue({ year: year || '' })),
        tap(({ handle }) => this.queryForm.patchValue({ handle })),
        tap(({ participantType }) =>
          this.queryForm.patchValue({ participantType: participantType || '' })
        ),
        tap((r) => {
          query$.next({
            handle: r['handle'],
            year: r['year'], // 2000 - current
            participantType: r['participantType'],
          });
        })
      )
      .subscribe();

    query$
      .pipe(
        map(async ({ handle }) => {
          try {
            this.ratingFetching = FetchStat.Fetching;
            const r = await this.codeforcesApiService.getUserRating(handle);
            if (r.status == 'OK') {
              this.ratingFetching = FetchStat.Success;
              userRating$.next(r.result);
            } else {
              console.error(r);
              this.ratingFetching = FetchStat.Failed;
              userRating$.next([]);
            }
          } catch (e) {
            console.error(e);
            this.ratingFetching = FetchStat.Failed;
            userRating$.next([]);
          }
        })
      )
      .subscribe();

    query$
      .pipe(
        map(async ({ handle }) => {
          try {
            this.statusFetching = FetchStat.Fetching;
            const r = await this.codeforcesApiService.getUserStatus(handle);
            if (r.status == 'OK') {
              this.statusFetching = FetchStat.Success;
              userStatus$.next(r.result);
            } else {
              console.error(r);
              this.statusFetching = FetchStat.Failed;
              userStatus$.next([]);
            }
          } catch (e) {
            console.error(e);
            this.statusFetching = FetchStat.Failed;
            userStatus$.next([]);
          }
        })
      )
      .subscribe();

    zip([query$, userRating$, userStatus$]).subscribe(
      ([{ year, participantType }, urating, ustatus]) => {
        console.log(year, participantType, urating, ustatus);
        const ratingList = userRatingFilterYear(urating, year);
        this.userRatingFiltered$.next(ratingList);
        const ratedContestId = new Set<number>();
        ratingList.forEach((o) => ratedContestId.add(o.contestId));
        let statusList = ustatus;
        statusList = userStatusFilterYear(statusList, year || '');
        statusList = userStatusFilterParticipantType(
          statusList,
          participantType || '',
          ratedContestId
        );
        this.userStatusFiltered$.next(statusList);
      }
    );

    this.userRatingFiltered$
      .pipe(
        tap(console.log),
        tap((l: CfUserRatingItem[]) => {
          this.view.ratingChange = ratingChange(l);
          this.view.rankHigh = [...l]
            .sort((a, b) => a.rank - b.rank)
            .slice(0, 3); // don't change originial array
          this.view.rankLow = [...l]
            .sort((a, b) => b.rank - a.rank)
            .slice(0, 3);
          this.view.ratingMaxInc = l
            .filter((o) => o.newRating - o.oldRating >= 0)
            .sort(
              (a, b) => b.newRating - b.oldRating - (a.newRating - a.oldRating)
            )
            .slice(0, 3);
          this.view.ratingMaxDec = l
            .filter((o) => o.newRating - o.oldRating <= 0)
            .sort(
              (a, b) => a.newRating - a.oldRating - (b.newRating - b.oldRating)
            )
            .slice(0, 3);
        })
      )
      .subscribe();

    this.userStatusFiltered$
      .pipe(
        tap(console.log),
        tap((l) => {
          this.view.contestCount = contestCount(l);
          this.view.submissionCount = l.length;
          const problemAnalyze = analyzeProblem(l);
          this.view.ACCount = problemAnalyze.filter((o) => o.ac).length;
          this.view.oneSubmissionSolved = problemAnalyze.filter(
            (o) => o.ac && o.attempt == 1
          ).length;
          let maxAttempt = 0;
          problemAnalyze.forEach((o) => {
            if (o.ac) maxAttempt = Math.max(maxAttempt, o.attempt);
          });
          this.view.maxAttemptAC = problemAnalyze
            .filter((o) => o.ac)
            .sort((a, b) => b.attempt - a.attempt)
            .slice(0, 3);
          this.view.fastAC = problemAnalyze
            .filter((o) => o.actime != -1)
            .sort((a, b) => a.actime - b.actime)
            .slice(0, 3);

          this.view.latestAC = problemAnalyze
            .filter((o) => o.actime != -1)
            .sort((a, b) => b.actime - a.actime)
            .slice(0, 3);

          this.view.hardestAC = problemAnalyze
            .filter((o) => o.ac && o.rating != 0)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3);

          this.view.unsolved = problemAnalyze
            .filter((o) => !o.ac)
            .sort((a, b) => b.attempt - a.attempt);

          this.view.verdict = analyzeVerdict(l);
          this.view.acTags = analyzeAcTags(l);
          this.view.firstAcLanguage = analyzeLanguage(l);
          this.view.acRating = analyzeAcRating(l);
          this.view.acIndex = analyzeAcIndex(l);
        })
      )
      .subscribe();
  }

  goButtonClick(): void {
    this.router.navigate([], {
      queryParams: {
        handle: this.queryForm.value.handle || undefined,
        year: this.queryForm.value.year || undefined,
        participantType: this.queryForm.value.participantType || undefined,
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(handle: string, year: string): void {
    console.log(handle, year);
  }
}

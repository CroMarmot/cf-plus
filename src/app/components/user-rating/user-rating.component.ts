import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CfUserRatingItem } from 'src/app/model/CfUserRatingItem';
import { CodeforcesStaticService } from 'src/app/services/codeforces-static.service';

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css'],
})
export class UserRatingComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource$: MatTableDataSource<CfUserRatingItem>;
  displayedColumns = [
    'contestId',
    'contestName',
    /* 'handle',*/
    'newRating',
    /* 'oldRating',*/
    'rank',
    'ratingUpdateTimeSeconds',
  ];

  private userRatingListPrivate: CfUserRatingItem[] = [];

  @Input() set userRatingList(value: CfUserRatingItem[]) {
    // console.log('userRatingList' + value.length);
    this.userRatingListPrivate = value;
    this.dataSource$ = new MatTableDataSource(value);
    this.dataSource$.paginator = this.paginator;
  }

  get userRatingList(): CfUserRatingItem[] {
    return this.userRatingListPrivate;
  }

  calcColor(r: number): string {
    const COLORS = CodeforcesStaticService.getColors();
    for (const i in COLORS) {
      if (r < COLORS[i].scoreHigh) {
        return COLORS[i].color;
      }
    }
    return '#000000';
  }
}

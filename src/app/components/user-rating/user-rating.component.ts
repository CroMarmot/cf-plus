import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { CfUserRatingItem } from '../../../model/CfUserRatingItem';
import { CodeforcesStaticService } from '../../../services/codeforces-static.service';

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css'],
})
export class UserRatingComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

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

  calcColor(r: number): string{
    const COLORS = CodeforcesStaticService.getColors();
    for (const i in COLORS) {
      if (r < COLORS[i].scoreHigh) {
        return COLORS[i].color;
      }
    }
    return '#000000';
  }

  ngOnInit(): void {
  }
}

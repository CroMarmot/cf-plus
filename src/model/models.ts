import {intDiv} from '../js/utils';

export class Date2GR {
  public day: number;
  public green: number;
  public red: number;
  public year: number;
  public month: number;
  public date: number;

  // date to green red
  constructor(day: number) {
    this.day = day;
    this.year = intDiv(day, 10000);
    this.month = intDiv(day, 100) % 100;
    this.date = day % 100;
    this.green = 0;
    this.red = 0;
  }

  addResult(val): Date2GR {
    if (val === 'OK') {
      this.green++;
    } else {
      this.red++;
    }
    return this;
  }
}

export class YearData {
  public year: number;
  public dateList: Date2GR[];

  constructor(year) {
    this.year = year;
    this.dateList = [];
  }
}


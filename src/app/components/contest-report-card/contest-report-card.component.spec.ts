import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestReportCardComponent } from './contest-report-card.component';

describe('ContestReportCardComponent', () => {
  let component: ContestReportCardComponent;
  let fixture: ComponentFixture<ContestReportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestReportCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContestReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

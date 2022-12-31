import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemReportCardComponent } from './problem-report-card.component';

describe('ProblemReportCardComponent', () => {
  let component: ProblemReportCardComponent;
  let fixture: ComponentFixture<ProblemReportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemReportCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

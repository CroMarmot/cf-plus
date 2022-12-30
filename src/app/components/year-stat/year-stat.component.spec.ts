import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearStatComponent } from './year-stat.component';

describe('YearStatComponent', () => {
  let component: YearStatComponent;
  let fixture: ComponentFixture<YearStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

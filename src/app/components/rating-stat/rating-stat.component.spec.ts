import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingStatComponent } from './rating-stat.component';

describe('RatingStatComponent', () => {
  let component: RatingStatComponent;
  let fixture: ComponentFixture<RatingStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

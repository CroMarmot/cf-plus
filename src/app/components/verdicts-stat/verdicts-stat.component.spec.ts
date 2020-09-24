import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdictsStatComponent } from './verdicts-stat.component';

describe('VerdictsStatComponent', () => {
  let component: VerdictsStatComponent;
  let fixture: ComponentFixture<VerdictsStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerdictsStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerdictsStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

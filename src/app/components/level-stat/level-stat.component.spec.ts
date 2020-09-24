import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelStatComponent } from './level-stat.component';

describe('LevelStatComponent', () => {
  let component: LevelStatComponent;
  let fixture: ComponentFixture<LevelStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

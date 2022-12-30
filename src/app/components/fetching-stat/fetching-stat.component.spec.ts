import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchingStatComponent } from './fetching-stat.component';

describe('FetchingStatComponent', () => {
  let component: FetchingStatComponent;
  let fixture: ComponentFixture<FetchingStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchingStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchingStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

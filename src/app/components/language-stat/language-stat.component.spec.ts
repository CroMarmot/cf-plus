import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageStatComponent } from './language-stat.component';

describe('LanguageStatComponent', () => {
  let component: LanguageStatComponent;
  let fixture: ComponentFixture<LanguageStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

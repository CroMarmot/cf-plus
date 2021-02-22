import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsStatComponent } from './tags-stat.component';

describe('TagsStatComponent', () => {
  let component: TagsStatComponent;
  let fixture: ComponentFixture<TagsStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelGridComponent } from './novel-grid.component';

describe('NovelGridComponent', () => {
  let component: NovelGridComponent;
  let fixture: ComponentFixture<NovelGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovelGridComponent]
    });
    fixture = TestBed.createComponent(NovelGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

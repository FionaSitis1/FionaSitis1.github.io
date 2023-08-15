import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuComponent } from './du.component';

describe('DuComponent', () => {
  let component: DuComponent;
  let fixture: ComponentFixture<DuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuComponent]
    });
    fixture = TestBed.createComponent(DuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

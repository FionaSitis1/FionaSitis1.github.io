import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlqHeaderComponent } from './rlq-header.component';

describe('RlqHeaderComponent', () => {
  let component: RlqHeaderComponent;
  let fixture: ComponentFixture<RlqHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RlqHeaderComponent]
    });
    fixture = TestBed.createComponent(RlqHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

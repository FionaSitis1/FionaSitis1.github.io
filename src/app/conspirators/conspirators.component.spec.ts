import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConspiratorsComponent } from './conspirators.component';

describe('ConspiratorsComponent', () => {
  let component: ConspiratorsComponent;
  let fixture: ComponentFixture<ConspiratorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConspiratorsComponent]
    });
    fixture = TestBed.createComponent(ConspiratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFloatingPageComponent } from './mobile-floating-page.component';

describe('MobileFloatingPageComponent', () => {
  let component: MobileFloatingPageComponent;
  let fixture: ComponentFixture<MobileFloatingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileFloatingPageComponent]
    });
    fixture = TestBed.createComponent(MobileFloatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

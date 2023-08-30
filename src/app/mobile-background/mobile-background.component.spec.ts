import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBackgroundComponent } from './mobile-background.component';

describe('MobileBackgroundComponent', () => {
  let component: MobileBackgroundComponent;
  let fixture: ComponentFixture<MobileBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileBackgroundComponent]
    });
    fixture = TestBed.createComponent(MobileBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

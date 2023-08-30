import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomebodyToLoveComponent } from './somebody-to-love.component';

describe('SomebodyToLoveComponent', () => {
  let component: SomebodyToLoveComponent;
  let fixture: ComponentFixture<SomebodyToLoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomebodyToLoveComponent]
    });
    fixture = TestBed.createComponent(SomebodyToLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

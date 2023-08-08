import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch15Component } from './ch15.component';

describe('Ch15Component', () => {
  let component: Ch15Component;
  let fixture: ComponentFixture<Ch15Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch15Component]
    });
    fixture = TestBed.createComponent(Ch15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

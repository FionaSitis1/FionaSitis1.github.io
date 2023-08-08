import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch3Component } from './ch3.component';

describe('Ch3Component', () => {
  let component: Ch3Component;
  let fixture: ComponentFixture<Ch3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch3Component]
    });
    fixture = TestBed.createComponent(Ch3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

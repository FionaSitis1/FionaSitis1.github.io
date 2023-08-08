import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch2Component } from './ch2.component';

describe('Ch2Component', () => {
  let component: Ch2Component;
  let fixture: ComponentFixture<Ch2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch2Component]
    });
    fixture = TestBed.createComponent(Ch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

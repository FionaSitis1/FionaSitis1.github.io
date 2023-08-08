import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch16Component } from './ch16.component';

describe('Ch16Component', () => {
  let component: Ch16Component;
  let fixture: ComponentFixture<Ch16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch16Component]
    });
    fixture = TestBed.createComponent(Ch16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

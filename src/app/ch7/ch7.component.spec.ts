import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch7Component } from './ch7.component';

describe('Ch7Component', () => {
  let component: Ch7Component;
  let fixture: ComponentFixture<Ch7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch7Component]
    });
    fixture = TestBed.createComponent(Ch7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

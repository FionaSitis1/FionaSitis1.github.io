import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch13Component } from './ch13.component';

describe('Ch13Component', () => {
  let component: Ch13Component;
  let fixture: ComponentFixture<Ch13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch13Component]
    });
    fixture = TestBed.createComponent(Ch13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

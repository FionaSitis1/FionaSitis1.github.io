import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch17Component } from './ch17.component';

describe('Ch17Component', () => {
  let component: Ch17Component;
  let fixture: ComponentFixture<Ch17Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch17Component]
    });
    fixture = TestBed.createComponent(Ch17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

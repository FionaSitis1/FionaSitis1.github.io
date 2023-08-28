import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch20Component } from './ch20.component';

describe('Ch20Component', () => {
  let component: Ch20Component;
  let fixture: ComponentFixture<Ch20Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch20Component]
    });
    fixture = TestBed.createComponent(Ch20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

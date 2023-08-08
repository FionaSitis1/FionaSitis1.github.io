import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch9Component } from './ch9.component';

describe('Ch9Component', () => {
  let component: Ch9Component;
  let fixture: ComponentFixture<Ch9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch9Component]
    });
    fixture = TestBed.createComponent(Ch9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

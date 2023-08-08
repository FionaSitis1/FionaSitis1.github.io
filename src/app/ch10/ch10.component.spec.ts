import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch10Component } from './ch10.component';

describe('Ch10Component', () => {
  let component: Ch10Component;
  let fixture: ComponentFixture<Ch10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch10Component]
    });
    fixture = TestBed.createComponent(Ch10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

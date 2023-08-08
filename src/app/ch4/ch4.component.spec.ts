import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch4Component } from './ch4.component';

describe('Ch4Component', () => {
  let component: Ch4Component;
  let fixture: ComponentFixture<Ch4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch4Component]
    });
    fixture = TestBed.createComponent(Ch4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

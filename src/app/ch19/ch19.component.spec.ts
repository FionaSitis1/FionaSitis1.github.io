import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch19Component } from './ch19.component';

describe('Ch19Component', () => {
  let component: Ch19Component;
  let fixture: ComponentFixture<Ch19Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch19Component]
    });
    fixture = TestBed.createComponent(Ch19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

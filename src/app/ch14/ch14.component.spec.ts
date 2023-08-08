import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch14Component } from './ch14.component';

describe('Ch14Component', () => {
  let component: Ch14Component;
  let fixture: ComponentFixture<Ch14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch14Component]
    });
    fixture = TestBed.createComponent(Ch14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

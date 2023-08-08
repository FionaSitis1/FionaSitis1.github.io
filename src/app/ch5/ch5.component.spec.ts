import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch5Component } from './ch5.component';

describe('Ch5Component', () => {
  let component: Ch5Component;
  let fixture: ComponentFixture<Ch5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch5Component]
    });
    fixture = TestBed.createComponent(Ch5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

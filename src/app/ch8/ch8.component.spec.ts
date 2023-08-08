import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch8Component } from './ch8.component';

describe('Ch8Component', () => {
  let component: Ch8Component;
  let fixture: ComponentFixture<Ch8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch8Component]
    });
    fixture = TestBed.createComponent(Ch8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch18Component } from './ch18.component';

describe('Ch18Component', () => {
  let component: Ch18Component;
  let fixture: ComponentFixture<Ch18Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch18Component]
    });
    fixture = TestBed.createComponent(Ch18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

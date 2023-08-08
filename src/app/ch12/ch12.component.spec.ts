import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch12Component } from './ch12.component';

describe('Ch12Component', () => {
  let component: Ch12Component;
  let fixture: ComponentFixture<Ch12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch12Component]
    });
    fixture = TestBed.createComponent(Ch12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

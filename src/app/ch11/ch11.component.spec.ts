import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch11Component } from './ch11.component';

describe('Ch11Component', () => {
  let component: Ch11Component;
  let fixture: ComponentFixture<Ch11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ch11Component]
    });
    fixture = TestBed.createComponent(Ch11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

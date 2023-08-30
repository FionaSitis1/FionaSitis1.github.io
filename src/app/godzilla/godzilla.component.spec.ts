import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodzillaComponent } from './godzilla.component';

describe('GodzillaComponent', () => {
  let component: GodzillaComponent;
  let fixture: ComponentFixture<GodzillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GodzillaComponent]
    });
    fixture = TestBed.createComponent(GodzillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

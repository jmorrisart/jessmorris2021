import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxdesignComponent } from './uxdesign.component';

describe('UxdesignComponent', () => {
  let component: UxdesignComponent;
  let fixture: ComponentFixture<UxdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenProductDirectiveComponent } from './open-product-directive.component';

describe('OpenProductDirectiveComponent', () => {
  let component: OpenProductDirectiveComponent;
  let fixture: ComponentFixture<OpenProductDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenProductDirectiveComponent]
    });
    fixture = TestBed.createComponent(OpenProductDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

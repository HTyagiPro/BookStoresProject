import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCartOrderComponent } from './place-cart-order.component';

describe('PlaceCartOrderComponent', () => {
  let component: PlaceCartOrderComponent;
  let fixture: ComponentFixture<PlaceCartOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceCartOrderComponent]
    });
    fixture = TestBed.createComponent(PlaceCartOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

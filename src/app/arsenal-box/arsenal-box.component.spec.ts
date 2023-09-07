import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsenalBoxComponent } from './arsenal-box.component';

describe('ArsenalBoxComponent', () => {
  let component: ArsenalBoxComponent;
  let fixture: ComponentFixture<ArsenalBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArsenalBoxComponent]
    });
    fixture = TestBed.createComponent(ArsenalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

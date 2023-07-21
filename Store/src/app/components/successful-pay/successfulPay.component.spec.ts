import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulPayComponent } from './successfulPay.component';

describe('SuccessfulPayComponent', () => {
  let component: SuccessfulPayComponent;
  let fixture: ComponentFixture<SuccessfulPayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessfulPayComponent]
    });
    fixture = TestBed.createComponent(SuccessfulPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

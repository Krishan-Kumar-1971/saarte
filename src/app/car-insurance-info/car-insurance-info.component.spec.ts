import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInsuranceInfoComponent } from './car-insurance-info.component';

describe('CarInsuranceInfoComponent', () => {
  let component: CarInsuranceInfoComponent;
  let fixture: ComponentFixture<CarInsuranceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarInsuranceInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarInsuranceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialInsuranceComponent } from './commercial-insurance.component';

describe('CommercialInsuranceComponent', () => {
  let component: CommercialInsuranceComponent;
  let fixture: ComponentFixture<CommercialInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

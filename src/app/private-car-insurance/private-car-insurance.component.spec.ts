import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCarInsuranceComponent } from './private-car-insurance.component';

describe('PrivateCarInsuranceComponent', () => {
  let component: PrivateCarInsuranceComponent;
  let fixture: ComponentFixture<PrivateCarInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateCarInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateCarInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

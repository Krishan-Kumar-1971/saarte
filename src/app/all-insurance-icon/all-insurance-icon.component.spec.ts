import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInsuranceIconComponent } from './all-insurance-icon.component';

describe('AllInsuranceIconComponent', () => {
  let component: AllInsuranceIconComponent;
  let fixture: ComponentFixture<AllInsuranceIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllInsuranceIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllInsuranceIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

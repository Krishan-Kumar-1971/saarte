import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScottyInsuranceComponent } from './scotty-insurance.component';

describe('ScottyInsuranceComponent', () => {
  let component: ScottyInsuranceComponent;
  let fixture: ComponentFixture<ScottyInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScottyInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScottyInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermInsuranceComponent } from './term-insurance.component';

describe('TermInsuranceComponent', () => {
  let component: TermInsuranceComponent;
  let fixture: ComponentFixture<TermInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

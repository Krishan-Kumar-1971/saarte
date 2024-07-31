import { Component } from '@angular/core';

@Component({
  selector: 'app-all-insurance-icon',
  templateUrl: './all-insurance-icon.component.html',
  styleUrls: ['./all-insurance-icon.component.css']
})
export class AllInsuranceIconComponent {
  insuranceItems = [
    { name: 'Car Insurance', icon: 'assets/car1.jpg' },
    { name: 'Bike Insurance', icon: 'assets/bike-scoty2.jpg' },
    { name: 'Commercial Vehicle Insurance', icon: 'assets/com-veh1.jpg' },
    { name: 'Individual Health Insurance', icon: 'assets/indiv1.jpg' },
    { name: 'Family Health Insurance', icon: 'assets/family1.jpg' },
    { name: 'Term Plan', icon: 'assets/term1.jpg' },
    { name: 'Travel Insurance', icon: 'assets/travel1.jpg' },
    { name: 'Fire Insurance', icon: 'assets/fire1.jpg' },
    { name: 'Life Insurance', icon: 'assets/life1.jpg' }
  ];
}

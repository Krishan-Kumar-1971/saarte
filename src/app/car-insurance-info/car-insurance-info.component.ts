import { Component } from '@angular/core';

@Component({
  selector: 'app-car-insurance-info',
  templateUrl: './car-insurance-info.component.html',
  styleUrls: ['./car-insurance-info.component.css']
})
export class CarInsuranceInfoComponent {
  items = [
    { image: 'assets/car1.jpg', text: "Drive with confidence knowing that you're protected against unexpected events. Our car insurance plans ensure that you and your loved ones are covered in case of accidents, theft, or damage. Secure your peace of mind on the road."
 },
    { image: 'assets/car2.jpg', text: "An accident can lead to substantial financial losses. With our comprehensive car insurance, you won't have to bear the burden alone. We cover repair costs, medical expenses, and more, helping you get back on track without financial stress."
 },
    { image: 'assets/scotty1.jpg', text: "Stay compliant with legal requirements by having the necessary scotty/bike insurance coverage. Avoid hefty fines and legal complications by ensuring your vehicle is insured. Our policies are designed to meet all regulatory standards." },
    { image: 'assets/bike1.jpg', text: "Every driver is unique, and so are our insurance plans. Choose a policy that fits your specific needs and budget. Whether you want basic coverage or extensive protection, we have a range of options to suit every requirement." },
    { image: 'assets/bike2.jpg', text: "Every rider is unique, and so are our insurance plans. Choose a policy that fits your specific needs and budget. Whether you want basic coverage or extensive protection, we have a range of options to suit every requirement." }
  ];
}

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivateCarInsuranceComponent } from './private-car-insurance/private-car-insurance.component';
import { ScottyInsuranceComponent } from './scotty-insurance/scotty-insurance.component';
import { CommercialInsuranceComponent } from './commercial-insurance/commercial-insurance.component';
import { MotorInsuranceComponent } from './motor-insurance/motor-insurance.component';
import { HealthInsuranceComponent } from './health-insurance/health-insurance.component';
import { TermInsuranceComponent } from './term-insurance/term-insurance.component';
import { LifeInsuranceComponent } from './life-insurance/life-insurance.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'private-car-insurance', component: PrivateCarInsuranceComponent },
  { path: 'scotty-insurance', component: ScottyInsuranceComponent },
  { path: 'commercial-insurance', component: CommercialInsuranceComponent },
  { path: 'motor-insurance', component: MotorInsuranceComponent },
  { path: 'health-insurance', component: HealthInsuranceComponent },
  { path: 'term-insurance', component: TermInsuranceComponent },
  { path: 'life-insurance', component: LifeInsuranceComponent },
  { path: '', redirectTo: '/about-us', pathMatch: 'full' },
  { path: '**', redirectTo: '/about-us' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

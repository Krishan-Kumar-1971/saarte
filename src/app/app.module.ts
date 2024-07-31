import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivateCarInsuranceComponent } from './private-car-insurance/private-car-insurance.component';
import { ScottyInsuranceComponent } from './scotty-insurance/scotty-insurance.component';
import { CommercialInsuranceComponent } from './commercial-insurance/commercial-insurance.component';
import { MotorInsuranceComponent } from './motor-insurance/motor-insurance.component';
import { TermInsuranceComponent } from './term-insurance/term-insurance.component';
import { HealthInsuranceComponent } from './health-insurance/health-insurance.component';
import { LifeInsuranceComponent } from './life-insurance/life-insurance.component';
import { BodyComponent } from './body/body.component';
import { CarInsuranceInfoComponent } from './car-insurance-info/car-insurance-info.component';
import { FooterComponent } from './footer/footer.component';
import { AllInsuranceIconComponent } from './all-insurance-icon/all-insurance-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AboutUsComponent,
    PrivateCarInsuranceComponent,
    ScottyInsuranceComponent,
    CommercialInsuranceComponent,
    MotorInsuranceComponent,
    TermInsuranceComponent,
    HealthInsuranceComponent,
    LifeInsuranceComponent,
    BodyComponent,
    CarInsuranceInfoComponent,
    FooterComponent,
    AllInsuranceIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

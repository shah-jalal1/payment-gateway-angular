import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaypalTwoRoutingModule } from './paypal-two-routing.module';
import { PaypalTwoComponent } from './paypal-two.component';


@NgModule({
  declarations: [
    PaypalTwoComponent
  ],
  exports: [
    PaypalTwoComponent
  ],
  imports: [
    CommonModule,
    PaypalTwoRoutingModule
  ]
})
export class PaypalTwoModule { }

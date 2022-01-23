import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GooglePayRoutingModule } from './google-pay-routing.module';
import { GooglePayComponent } from './google-pay.component';

import { GooglePayButtonModule } from '@google-pay/button-angular';


@NgModule({
  declarations: [
    GooglePayComponent
  ],
  exports: [
    GooglePayComponent
  ],
  imports: [
    CommonModule,
    GooglePayRoutingModule,
    GooglePayButtonModule
  ]
})
export class GooglePayModule { }

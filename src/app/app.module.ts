import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PaypaModule} from "./paypa/paypa.module";
import { NgxPayPalModule } from 'ngx-paypal';
import {PaypalTwoModule} from "./paypal-two/paypal-two.module";
import {GooglePayModule} from "./google-pay/google-pay.module";
import { Stripe3Component } from './stripe3/stripe3.component';
import {NgxStripeModule} from "ngx-stripe";
import {ReactiveFormsModule} from "@angular/forms";
import {StripeModule} from "./stripe/stripe.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    Stripe3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaypaModule,
    NgxPayPalModule,
    PaypalTwoModule,
    GooglePayModule,
    NgxStripeModule.forRoot('pk_test_51IeCaSIuW9m5uNpEd0c2E5hvnn18ad1CCSqlS5olW9lIyhFee3744sjy8GKnQXqIoezmbDKHT1cuyEqnTQP6WVYH00xcqP3fNj'),
    // NgxStripeModule.forRoot('sk_test_51IeCaSIuW9m5uNpEzGJnSPgR5CQD0caZldjfO16BIwTytPTJKZAcQrlUSyWGPZnJCoZCMWpdCkyjG7czL59QB5Vu00EmfFqdIZ'),
    ReactiveFormsModule,
    StripeModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

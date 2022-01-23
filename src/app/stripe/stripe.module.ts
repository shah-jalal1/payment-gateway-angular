import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StripeRoutingModule } from './stripe-routing.module';
import { StripeComponent } from './stripe.component';
import {FormsModule} from "@angular/forms";
import {NgxStripeModule} from "ngx-stripe";


@NgModule({
    declarations: [
        StripeComponent
    ],
    exports: [
        StripeComponent
    ],
  imports: [
    CommonModule,
    StripeRoutingModule,
    FormsModule,
    // NgxStripeModule.forRoot('pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9'),
    // NgxStripeModule.forRoot('sk_test_51IeCaSIuW9m5uNpEzGJnSPgR5CQD0caZldjfO16BIwTytPTJKZAcQrlUSyWGPZnJCoZCMWpdCkyjG7czL59QB5Vu00EmfFqdIZ'),
  ]
})
export class StripeModule { }

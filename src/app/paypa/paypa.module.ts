import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaypaRoutingModule } from './paypa-routing.module';
import { PaypaComponent } from './paypa.component';
import {NgxPayPalModule} from "ngx-paypal";


@NgModule({
    declarations: [
        PaypaComponent
    ],
    exports: [
        PaypaComponent
    ],
    imports: [
        CommonModule,
        PaypaRoutingModule,
        NgxPayPalModule
    ]
})
export class PaypaModule { }

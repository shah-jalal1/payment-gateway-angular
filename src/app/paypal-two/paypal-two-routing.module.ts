import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaypalTwoComponent} from "./paypal-two.component";

const routes: Routes = [
  {
    path: '',
    component: PaypalTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaypalTwoRoutingModule { }

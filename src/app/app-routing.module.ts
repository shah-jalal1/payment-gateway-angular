import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"stripe",
    loadChildren: () => import('./stripe/stripe.module').then(m => m.StripeModule)
  },
  {
    path:"paypal",
    loadChildren: () => import('./stripe/stripe.module').then(m => m.StripeModule)
  },
  {
    path:"paypal-two",
    loadChildren: () => import('./paypal-two/paypal-two-routing.module').then(m => m.PaypalTwoRoutingModule)
  },
  {
    path:"google-pay",
    loadChildren: () => import('./google-pay/google-pay-routing.module').then(m => m.GooglePayRoutingModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

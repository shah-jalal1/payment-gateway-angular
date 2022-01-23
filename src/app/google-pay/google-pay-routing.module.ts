import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GooglePayComponent} from "./google-pay.component";

const routes: Routes = [
  {
    path: '',
    component: GooglePayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GooglePayRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaypaComponent} from "./paypa.component";

const routes: Routes = [
  {
    path: "",
    component: PaypaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaypaRoutingModule { }

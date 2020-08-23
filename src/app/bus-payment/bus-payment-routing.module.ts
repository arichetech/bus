import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusPaymentPage } from './bus-payment.page';

const routes: Routes = [
  {
    path: '',
    component: BusPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusPaymentPageRoutingModule {}

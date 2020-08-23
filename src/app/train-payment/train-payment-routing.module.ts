import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainPaymentPage } from './train-payment.page';

const routes: Routes = [
  {
    path: '',
    component: TrainPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainPaymentPageRoutingModule {}

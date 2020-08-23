import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabPaymentPage } from './cab-payment.page';

const routes: Routes = [
  {
    path: '',
    component: CabPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabPaymentPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomestayPaymentPage } from './homestay-payment.page';

const routes: Routes = [
  {
    path: '',
    component: HomestayPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomestayPaymentPageRoutingModule {}

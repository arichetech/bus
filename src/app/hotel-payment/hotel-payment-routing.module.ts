import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelPaymentPage } from './hotel-payment.page';

const routes: Routes = [
  {
    path: '',
    component: HotelPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelPaymentPageRoutingModule {}

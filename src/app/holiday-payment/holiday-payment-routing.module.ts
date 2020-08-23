import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolidayPaymentPage } from './holiday-payment.page';

const routes: Routes = [
  {
    path: '',
    component: HolidayPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidayPaymentPageRoutingModule {}

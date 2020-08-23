import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolidayConfirmBookingPage } from './holiday-confirm-booking.page';

const routes: Routes = [
  {
    path: '',
    component: HolidayConfirmBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidayConfirmBookingPageRoutingModule {}

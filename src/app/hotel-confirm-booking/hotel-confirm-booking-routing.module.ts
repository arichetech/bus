import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelConfirmBookingPage } from './hotel-confirm-booking.page';

const routes: Routes = [
  {
    path: '',
    component: HotelConfirmBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelConfirmBookingPageRoutingModule {}

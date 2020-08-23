import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusConfirmBookingPage } from './bus-confirm-booking.page';

const routes: Routes = [
  {
    path: '',
    component: BusConfirmBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusConfirmBookingPageRoutingModule {}

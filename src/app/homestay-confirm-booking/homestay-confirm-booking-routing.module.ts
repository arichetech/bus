import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomestayConfirmBookingPage } from './homestay-confirm-booking.page';

const routes: Routes = [
  {
    path: '',
    component: HomestayConfirmBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomestayConfirmBookingPageRoutingModule {}

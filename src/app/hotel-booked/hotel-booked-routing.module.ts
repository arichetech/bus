import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelBookedPage } from './hotel-booked.page';

const routes: Routes = [
  {
    path: '',
    component: HotelBookedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelBookedPageRoutingModule {}

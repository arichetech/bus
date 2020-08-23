import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolidayBookedPage } from './holiday-booked.page';

const routes: Routes = [
  {
    path: '',
    component: HolidayBookedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidayBookedPageRoutingModule {}

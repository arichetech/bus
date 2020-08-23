import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomestayBookedPage } from './homestay-booked.page';

const routes: Routes = [
  {
    path: '',
    component: HomestayBookedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomestayBookedPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelReviewPage } from './hotel-review.page';

const routes: Routes = [
  {
    path: '',
    component: HotelReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelReviewPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomestayReviewPage } from './homestay-review.page';

const routes: Routes = [
  {
    path: '',
    component: HomestayReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomestayReviewPageRoutingModule {}

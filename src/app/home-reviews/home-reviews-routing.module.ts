import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeReviewsPage } from './home-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: HomeReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeReviewsPageRoutingModule {}

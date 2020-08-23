import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelsListPage } from './hotels-list.page';

const routes: Routes = [
  {
    path: '',
    component: HotelsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelsListPageRoutingModule {}

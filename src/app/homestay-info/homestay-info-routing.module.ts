import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomestayInfoPage } from './homestay-info.page';

const routes: Routes = [
  {
    path: '',
    component: HomestayInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomestayInfoPageRoutingModule {}

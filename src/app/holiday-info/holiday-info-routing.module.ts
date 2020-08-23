import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolidayInfoPage } from './holiday-info.page';

const routes: Routes = [
  {
    path: '',
    component: HolidayInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidayInfoPageRoutingModule {}

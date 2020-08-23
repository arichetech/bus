import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchHolidayPage } from './search-holiday.page';

const routes: Routes = [
  {
    path: '',
    component: SearchHolidayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchHolidayPageRoutingModule {}

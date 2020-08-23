import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCabPage } from './search-cab.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCabPageRoutingModule {}

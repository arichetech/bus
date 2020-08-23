import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchFlightsPage } from './search-flights.page';

const routes: Routes = [
  {
    path: '',
    component: SearchFlightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchFlightsPageRoutingModule {}

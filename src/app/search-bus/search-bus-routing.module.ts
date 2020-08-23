import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBusPage } from './search-bus.page';

const routes: Routes = [
  {
    path: '',
    component: SearchBusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchBusPageRoutingModule {}

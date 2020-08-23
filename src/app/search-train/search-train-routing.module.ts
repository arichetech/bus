import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTrainPage } from './search-train.page';

const routes: Routes = [
  {
    path: '',
    component: SearchTrainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchTrainPageRoutingModule {}

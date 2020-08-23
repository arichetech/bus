import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabListPage } from './cab-list.page';

const routes: Routes = [
  {
    path: '',
    component: CabListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabListPageRoutingModule {}

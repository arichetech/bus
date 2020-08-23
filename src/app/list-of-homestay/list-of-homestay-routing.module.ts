import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfHomestayPage } from './list-of-homestay.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfHomestayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfHomestayPageRoutingModule {}

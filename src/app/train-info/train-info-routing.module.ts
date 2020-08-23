import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainInfoPage } from './train-info.page';

const routes: Routes = [
  {
    path: '',
    component: TrainInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainInfoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainResultPage } from './train-result.page';

const routes: Routes = [
  {
    path: '',
    component: TrainResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainResultPageRoutingModule {}

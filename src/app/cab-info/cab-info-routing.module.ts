import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabInfoPage } from './cab-info.page';

const routes: Routes = [
  {
    path: '',
    component: CabInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabInfoPageRoutingModule {}

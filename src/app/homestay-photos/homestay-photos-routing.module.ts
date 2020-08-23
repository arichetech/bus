import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomestayPhotosPage } from './homestay-photos.page';

const routes: Routes = [
  {
    path: '',
    component: HomestayPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomestayPhotosPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelPhotosPage } from './hotel-photos.page';

const routes: Routes = [
  {
    path: '',
    component: HotelPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelPhotosPageRoutingModule {}

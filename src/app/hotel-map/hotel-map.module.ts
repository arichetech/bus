import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { HotelMapPageRoutingModule } from './hotel-map-routing.module';

import { HotelMapPage } from './hotel-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    HotelMapPageRoutingModule
  ],
  declarations: [HotelMapPage]
})
export class HotelMapPageModule {}

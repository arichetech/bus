import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
    
import { IonicModule } from '@ionic/angular';

import { HotelPhotosPageRoutingModule } from './hotel-photos-routing.module';

import { HotelPhotosPage } from './hotel-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HotelPhotosPageRoutingModule
  ],
  declarations: [HotelPhotosPage]
})
export class HotelPhotosPageModule {}

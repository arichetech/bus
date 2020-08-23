import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { HotelBookedPageRoutingModule } from './hotel-booked-routing.module';

import { HotelBookedPage } from './hotel-booked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HotelBookedPageRoutingModule
  ],
  declarations: [HotelBookedPage]
})
export class HotelBookedPageModule {}

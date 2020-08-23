import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { HotelConfirmBookingPageRoutingModule } from './hotel-confirm-booking-routing.module';

import { HotelConfirmBookingPage } from './hotel-confirm-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    HotelConfirmBookingPageRoutingModule
  ],
  declarations: [HotelConfirmBookingPage]
})
export class HotelConfirmBookingPageModule {}

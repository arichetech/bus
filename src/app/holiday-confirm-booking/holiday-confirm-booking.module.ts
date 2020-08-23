import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { HolidayConfirmBookingPageRoutingModule } from './holiday-confirm-booking-routing.module';

import { HolidayConfirmBookingPage } from './holiday-confirm-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HolidayConfirmBookingPageRoutingModule
  ],
  declarations: [HolidayConfirmBookingPage]
})
export class HolidayConfirmBookingPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { HomestayConfirmBookingPageRoutingModule } from './homestay-confirm-booking-routing.module';

import { HomestayConfirmBookingPage } from './homestay-confirm-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    HomestayConfirmBookingPageRoutingModule
  ],
  declarations: [HomestayConfirmBookingPage]
})
export class HomestayConfirmBookingPageModule {}

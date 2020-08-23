import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { BusConfirmBookingPageRoutingModule } from './bus-confirm-booking-routing.module';

import { BusConfirmBookingPage } from './bus-confirm-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    BusConfirmBookingPageRoutingModule
  ],
  declarations: [BusConfirmBookingPage]
})
export class BusConfirmBookingPageModule {}

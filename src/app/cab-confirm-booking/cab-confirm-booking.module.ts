import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { CabConfirmBookingPageRoutingModule } from './cab-confirm-booking-routing.module';

import { CabConfirmBookingPage } from './cab-confirm-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    CabConfirmBookingPageRoutingModule
  ],
  declarations: [CabConfirmBookingPage]
})
export class CabConfirmBookingPageModule {}

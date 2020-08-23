import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
   
import { IonicModule } from '@ionic/angular';

import { TrainConfirmBookingPageRoutingModule } from './train-confirm-booking-routing.module';

import { TrainConfirmBookingPage } from './train-confirm-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    TrainConfirmBookingPageRoutingModule
  ],
  declarations: [TrainConfirmBookingPage]
})
export class TrainConfirmBookingPageModule {}

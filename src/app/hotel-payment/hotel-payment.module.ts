import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { HotelPaymentPageRoutingModule } from './hotel-payment-routing.module';

import { HotelPaymentPage } from './hotel-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HotelPaymentPageRoutingModule
  ],
  declarations: [HotelPaymentPage]
})
export class HotelPaymentPageModule {}

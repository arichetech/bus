import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { HolidayPaymentPageRoutingModule } from './holiday-payment-routing.module';

import { HolidayPaymentPage } from './holiday-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    HolidayPaymentPageRoutingModule
  ],
  declarations: [HolidayPaymentPage]
})
export class HolidayPaymentPageModule {}

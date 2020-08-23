import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { HomestayPaymentPageRoutingModule } from './homestay-payment-routing.module';

import { HomestayPaymentPage } from './homestay-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
     TranslateModule,   
    HomestayPaymentPageRoutingModule
  ],
  declarations: [HomestayPaymentPage]
})
export class HomestayPaymentPageModule {}

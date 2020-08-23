import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { BusPaymentPageRoutingModule } from './bus-payment-routing.module';

import { BusPaymentPage } from './bus-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    BusPaymentPageRoutingModule
  ],
  declarations: [BusPaymentPage]
})
export class BusPaymentPageModule {}

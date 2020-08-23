import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { TrainPaymentPageRoutingModule } from './train-payment-routing.module';

import { TrainPaymentPage } from './train-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    TrainPaymentPageRoutingModule
  ],
  declarations: [TrainPaymentPage]
})
export class TrainPaymentPageModule {}

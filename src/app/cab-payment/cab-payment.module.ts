import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { CabPaymentPageRoutingModule } from './cab-payment-routing.module';

import { CabPaymentPage } from './cab-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    CabPaymentPageRoutingModule
  ],
  declarations: [CabPaymentPage]
})
export class CabPaymentPageModule {}

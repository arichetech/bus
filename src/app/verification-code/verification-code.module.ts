import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { VerificationCodePageRoutingModule } from './verification-code-routing.module';

import { VerificationCodePage } from './verification-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    VerificationCodePageRoutingModule
  ],
  declarations: [VerificationCodePage]
})
export class VerificationCodePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { CabInfoPageRoutingModule } from './cab-info-routing.module';

import { CabInfoPage } from './cab-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    CabInfoPageRoutingModule
  ],
  declarations: [CabInfoPage]
})
export class CabInfoPageModule {}

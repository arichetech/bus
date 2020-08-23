import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
      
import { IonicModule } from '@ionic/angular';

import { BusInfoPageRoutingModule } from './bus-info-routing.module';

import { BusInfoPage } from './bus-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    BusInfoPageRoutingModule
  ],
  declarations: [BusInfoPage]
})
export class BusInfoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { HolidayInfoPageRoutingModule } from './holiday-info-routing.module';

import { HolidayInfoPage } from './holiday-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    HolidayInfoPageRoutingModule
  ],
  declarations: [HolidayInfoPage]
})
export class HolidayInfoPageModule {}

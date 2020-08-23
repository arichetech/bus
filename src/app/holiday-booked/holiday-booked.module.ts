import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
   
import { IonicModule } from '@ionic/angular';

import { HolidayBookedPageRoutingModule } from './holiday-booked-routing.module';

import { HolidayBookedPage } from './holiday-booked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    HolidayBookedPageRoutingModule
  ],
  declarations: [HolidayBookedPage]
})
export class HolidayBookedPageModule {}

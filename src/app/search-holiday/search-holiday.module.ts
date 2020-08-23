import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { SearchHolidayPageRoutingModule } from './search-holiday-routing.module';

import { SearchHolidayPage } from './search-holiday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    SearchHolidayPageRoutingModule
  ],
  declarations: [SearchHolidayPage]
})
export class SearchHolidayPageModule {}

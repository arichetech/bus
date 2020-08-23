import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
   
import { IonicModule } from '@ionic/angular';

import { HomestayBookedPageRoutingModule } from './homestay-booked-routing.module';

import { HomestayBookedPage } from './homestay-booked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    HomestayBookedPageRoutingModule
  ],
  declarations: [HomestayBookedPage]
})
export class HomestayBookedPageModule {}

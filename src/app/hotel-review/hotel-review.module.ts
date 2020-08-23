import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { HotelReviewPageRoutingModule } from './hotel-review-routing.module';

import { HotelReviewPage } from './hotel-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    HotelReviewPageRoutingModule
  ],
  declarations: [HotelReviewPage]
})
export class HotelReviewPageModule {}

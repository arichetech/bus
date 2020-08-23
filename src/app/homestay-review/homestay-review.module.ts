import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { HomestayReviewPageRoutingModule } from './homestay-review-routing.module';

import { HomestayReviewPage } from './homestay-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    HomestayReviewPageRoutingModule
  ],
  declarations: [HomestayReviewPage]
})
export class HomestayReviewPageModule {}

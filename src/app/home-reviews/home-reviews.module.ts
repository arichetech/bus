import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeReviewsPageRoutingModule } from './home-reviews-routing.module';

import { HomeReviewsPage } from './home-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeReviewsPageRoutingModule
  ],
  declarations: [HomeReviewsPage]
})
export class HomeReviewsPageModule {}

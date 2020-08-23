import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { SearchHomestayPageRoutingModule } from './search-homestay-routing.module';

import { SearchHomestayPage } from './search-homestay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,     
    SearchHomestayPageRoutingModule
  ],
  declarations: [SearchHomestayPage]
})
export class SearchHomestayPageModule {}

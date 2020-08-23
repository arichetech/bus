import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { HotelsListPageRoutingModule } from './hotels-list-routing.module';

import { HotelsListPage } from './hotels-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HotelsListPageRoutingModule
  ],
  declarations: [HotelsListPage]
})
export class HotelsListPageModule {}

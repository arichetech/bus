import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { HomestayInfoPageRoutingModule } from './homestay-info-routing.module';

import { HomestayInfoPage } from './homestay-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    HomestayInfoPageRoutingModule
  ],
  declarations: [HomestayInfoPage]
})
export class HomestayInfoPageModule {}

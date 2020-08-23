import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { HomestayMapPageRoutingModule } from './homestay-map-routing.module';

import { HomestayMapPage } from './homestay-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    HomestayMapPageRoutingModule
  ],
  declarations: [HomestayMapPage]
})
export class HomestayMapPageModule {}

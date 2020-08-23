import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { HomestayPhotosPageRoutingModule } from './homestay-photos-routing.module';

import { HomestayPhotosPage } from './homestay-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    HomestayPhotosPageRoutingModule
  ],
  declarations: [HomestayPhotosPage]
})
export class HomestayPhotosPageModule {}

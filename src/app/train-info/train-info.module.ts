import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { TrainInfoPageRoutingModule } from './train-info-routing.module';

import { TrainInfoPage } from './train-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    TrainInfoPageRoutingModule
  ],
  declarations: [TrainInfoPage]
})
export class TrainInfoPageModule {}

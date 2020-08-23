import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { TrainResultPageRoutingModule } from './train-result-routing.module';

import { TrainResultPage } from './train-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    TrainResultPageRoutingModule
  ],
  declarations: [TrainResultPage]
})
export class TrainResultPageModule {}

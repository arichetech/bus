import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
   
import { IonicModule } from '@ionic/angular';

import { SearchTrainPageRoutingModule } from './search-train-routing.module';

import { SearchTrainPage } from './search-train.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    SearchTrainPageRoutingModule
  ],
  declarations: [SearchTrainPage]
})
export class SearchTrainPageModule {}

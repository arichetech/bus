import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
   
import { IonicModule } from '@ionic/angular';

import { SearchBusPageRoutingModule } from './search-bus-routing.module';

import { SearchBusPage } from './search-bus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    SearchBusPageRoutingModule
  ],
  declarations: [SearchBusPage]
})
export class SearchBusPageModule {}

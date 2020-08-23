import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { SearchCabPageRoutingModule } from './search-cab-routing.module';

import { SearchCabPage } from './search-cab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    SearchCabPageRoutingModule
  ],
  declarations: [SearchCabPage]
})
export class SearchCabPageModule {}

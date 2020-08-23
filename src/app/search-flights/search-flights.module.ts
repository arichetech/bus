import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { SearchFlightsPageRoutingModule } from './search-flights-routing.module';

import { SearchFlightsPage } from './search-flights.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    SearchFlightsPageRoutingModule,
     
  ],
  declarations: [SearchFlightsPage]
})
export class SearchFlightsPageModule {}

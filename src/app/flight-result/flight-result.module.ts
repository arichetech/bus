import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { FlightResultPageRoutingModule } from './flight-result-routing.module';

import { FlightResultPage } from './flight-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    FlightResultPageRoutingModule
  ],
  declarations: [FlightResultPage]
})
export class FlightResultPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { FlightTicketPageRoutingModule } from './flight-ticket-routing.module';

import { FlightTicketPage } from './flight-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    FlightTicketPageRoutingModule
  ],
  declarations: [FlightTicketPage]
})
export class FlightTicketPageModule {}

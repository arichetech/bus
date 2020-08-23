import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
   
import { IonicModule } from '@ionic/angular';

import { CabTicketPageRoutingModule } from './cab-ticket-routing.module';

import { CabTicketPage } from './cab-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    CabTicketPageRoutingModule
  ],
  declarations: [CabTicketPage]
})
export class CabTicketPageModule {}

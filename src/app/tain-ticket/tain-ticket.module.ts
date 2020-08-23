import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { TainTicketPageRoutingModule } from './tain-ticket-routing.module';

import { TainTicketPage } from './tain-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    TainTicketPageRoutingModule
  ],
  declarations: [TainTicketPage]
})
export class TainTicketPageModule {}

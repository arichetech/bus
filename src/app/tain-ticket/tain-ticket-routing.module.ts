import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TainTicketPage } from './tain-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: TainTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TainTicketPageRoutingModule {}

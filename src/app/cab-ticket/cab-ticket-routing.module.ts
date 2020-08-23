import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabTicketPage } from './cab-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: CabTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabTicketPageRoutingModule {}

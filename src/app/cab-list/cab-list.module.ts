import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
   
import { IonicModule } from '@ionic/angular';

import { CabListPageRoutingModule } from './cab-list-routing.module';

import { CabListPage } from './cab-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    CabListPageRoutingModule
  ],
  declarations: [CabListPage]
})
export class CabListPageModule {}

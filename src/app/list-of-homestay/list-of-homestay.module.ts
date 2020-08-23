import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ListOfHomestayPageRoutingModule } from './list-of-homestay-routing.module';

import { ListOfHomestayPage } from './list-of-homestay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    ListOfHomestayPageRoutingModule
  ],
  declarations: [ListOfHomestayPage]
})
export class ListOfHomestayPageModule {}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
dismiss(){
   this.modalController.dismiss();
 }
 
}

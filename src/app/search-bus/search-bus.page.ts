import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CalendarPage } from '../calendar/calendar.page'; 

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.page.html',
  styleUrls: ['./search-bus.page.scss'],
})
export class SearchBusPage implements OnInit {
  class: string = "1";
  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }

 calendar(){
    this.modalController.create({component:CalendarPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  } 
  bus_list() {
    this.route.navigate(['./bus-list']);
  }
}

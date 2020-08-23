import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CalendarPage } from '../calendar/calendar.page'; 
@Component({
  selector: 'app-search-cab',
  templateUrl: './search-cab.page.html',
  styleUrls: ['./search-cab.page.scss'],
})
export class SearchCabPage implements OnInit {
  flights: string = "round_trip";
  abult: string = "1";
  children: string = "0";
  infrat: string = "0";  
  class: string = "Economy";  
    
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
  cab_list() {
    this.route.navigate(['./cab-list']);
  }
}

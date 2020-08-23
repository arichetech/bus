import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CalendarPage } from '../calendar/calendar.page'; 
@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.page.html',
  styleUrls: ['./search-hotel.page.scss'],
})
export class SearchHotelPage implements OnInit {
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

hotels_list() {
    this.route.navigate(['./hotels-list']);
  }  
}

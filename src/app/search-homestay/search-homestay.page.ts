import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CalendarPage } from '../calendar/calendar.page'; 

@Component({
  selector: 'app-search-homestay',
  templateUrl: './search-homestay.page.html',
  styleUrls: ['./search-homestay.page.scss'],
})
export class SearchHomestayPage implements OnInit {
  abult: string = "1";
  children: string = "0";
  infrat: string = "0";  
  class: string = "Economy"; 
  home_type: string = "1"; 
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

list_of_homestay() {
    this.route.navigate(['./list-of-homestay']);
  } 
}

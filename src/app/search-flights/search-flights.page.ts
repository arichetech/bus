import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CalendarPage } from '../calendar/calendar.page'; 
@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.page.html',
  styleUrls: ['./search-flights.page.scss'],
})
export class SearchFlightsPage implements OnInit {
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

flight_result() {
    this.route.navigate(['./flight-result']);
  }  
}

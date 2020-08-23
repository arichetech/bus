import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.page.html',
  styleUrls: ['./hotel-info.page.scss'],
})
export class HotelInfoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 hotel_confirm_booking() {
    this.route.navigate(['./hotel-confirm-booking']);
  }  
 hotel_map() {
    this.route.navigate(['./hotel-map']);
  }
 hotel_photos() {
    this.route.navigate(['./hotel-photos']);
  }  
 hotel_review() {
    this.route.navigate(['./hotel-review']);
  } 
 hotels_list() {
    this.route.navigate(['./hotels-list']);
  } 
}

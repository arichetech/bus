import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private route: Router,@Inject(APP_CONFIG) public config: AppConfig) { }

  ngOnInit() {
  }
 search_flights() {
    this.route.navigate(['./search-flights']);
  }  
 search_hotel() {
    this.route.navigate(['./search-hotel']);
  }  
 search_train() {
    this.route.navigate(['./search-train']);
  } 
 search_holiday() {
    this.route.navigate(['./search-holiday']);
  }  
 search_bus() {
    this.route.navigate(['./search-bus']);
  }  
 search_cab() {
    this.route.navigate(['./search-cab']);
  } 
 search_homestay() {
    this.route.navigate(['./search-homestay']);
  }  
 hotel_info() {
    this.route.navigate(['./hotel-info']);
  }  

  buyAppAction() {
    window.open("https://bit.ly/cc2_TripUp", '_system', 'location=no');
  }

}

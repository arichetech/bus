import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.page.html',
  styleUrls: ['./flight-result.page.scss'],
})
export class FlightResultPage implements OnInit {
ticket_price: string = "1";
  constructor(private route: Router) { }

  ngOnInit() {
  }

 filter() {
    this.route.navigate(['./filter']);
  } 
 flight_info() {
    this.route.navigate(['./flight-info']);
  } 
}

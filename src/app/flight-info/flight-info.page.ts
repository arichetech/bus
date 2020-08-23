import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.page.html',
  styleUrls: ['./flight-info.page.scss'],
})
export class FlightInfoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
 confirm_booking() {
    this.route.navigate(['./confirm-booking']);
  } 
}

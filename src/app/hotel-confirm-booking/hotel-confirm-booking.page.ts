import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-confirm-booking',
  templateUrl: './hotel-confirm-booking.page.html',
  styleUrls: ['./hotel-confirm-booking.page.scss'],
})
export class HotelConfirmBookingPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

payment() {
    this.route.navigate(['./hotel-payment']);
  } 
}

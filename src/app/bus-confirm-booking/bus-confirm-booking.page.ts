import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-confirm-booking',
  templateUrl: './bus-confirm-booking.page.html',
  styleUrls: ['./bus-confirm-booking.page.scss'],
})
export class BusConfirmBookingPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
 bus_payment() {
    this.route.navigate(['./bus-payment']);
  } 
}

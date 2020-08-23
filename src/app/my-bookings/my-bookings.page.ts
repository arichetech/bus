import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.page.html',
  styleUrls: ['./my-bookings.page.scss'],
})
export class MyBookingsPage implements OnInit {
bookings: string = "all_bookings";
  constructor(private route: Router) { }

  ngOnInit() {
  }

hotel_booked() {
    this.route.navigate(['./hotel-booked']);
  } 
flight_ticket() {
    this.route.navigate(['./flight-ticket']);
  } 
tain_ticket() {
    this.route.navigate(['./tain-ticket']);
  } 
holiday_booked() {
    this.route.navigate(['./holiday-booked']);
  } 
bus_ticket() {
    this.route.navigate(['./bus-ticket']);
  } 
homestay_booked() {
    this.route.navigate(['./homestay-booked']);
  } 
}

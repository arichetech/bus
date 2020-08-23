import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holiday-confirm-booking',
  templateUrl: './holiday-confirm-booking.page.html',
  styleUrls: ['./holiday-confirm-booking.page.scss'],
})
export class HolidayConfirmBookingPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

payment() {
    this.route.navigate(['./holiday-payment']);
  } 
}

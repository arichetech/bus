import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homestay-confirm-booking',
  templateUrl: './homestay-confirm-booking.page.html',
  styleUrls: ['./homestay-confirm-booking.page.scss'],
})
export class HomestayConfirmBookingPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

payment() {
    this.route.navigate(['./homestay-payment']);
  } 
}

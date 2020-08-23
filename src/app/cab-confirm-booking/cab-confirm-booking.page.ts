import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cab-confirm-booking',
  templateUrl: './cab-confirm-booking.page.html',
  styleUrls: ['./cab-confirm-booking.page.scss'],
})
export class CabConfirmBookingPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

payment() {
    this.route.navigate(['./cab-payment']);
  } 
}

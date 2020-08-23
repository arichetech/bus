import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.page.html',
  styleUrls: ['./confirm-booking.page.scss'],
})
export class ConfirmBookingPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

payment() {
    this.route.navigate(['./payment']);
  } 
}

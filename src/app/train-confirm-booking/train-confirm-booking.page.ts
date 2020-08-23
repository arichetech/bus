import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train-confirm-booking',
  templateUrl: './train-confirm-booking.page.html',
  styleUrls: ['./train-confirm-booking.page.scss'],
})
export class TrainConfirmBookingPage implements OnInit {
  constructor(private route: Router) { }

  ngOnInit() {
  }

payment() {
    this.route.navigate(['./train-payment']);
  } 
}

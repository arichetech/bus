import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-payment',
  templateUrl: './hotel-payment.page.html',
  styleUrls: ['./hotel-payment.page.scss'],
})
export class HotelPaymentPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

hotel_booked() {
    this.route.navigate(['./hotel-booked']);
  } 
}

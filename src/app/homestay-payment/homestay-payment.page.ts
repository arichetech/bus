import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homestay-payment',
  templateUrl: './homestay-payment.page.html',
  styleUrls: ['./homestay-payment.page.scss'],
})
export class HomestayPaymentPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

homestay_booked() {
    this.route.navigate(['./homestay-booked']);
  } 
}

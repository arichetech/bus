import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holiday-payment',
  templateUrl: './holiday-payment.page.html',
  styleUrls: ['./holiday-payment.page.scss'],
})
export class HolidayPaymentPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

holiday_booked() {
    this.route.navigate(['./holiday-booked']);
  } 
}

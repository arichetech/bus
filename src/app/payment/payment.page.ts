import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

flight_ticket() {
    this.route.navigate(['./flight-ticket']);
  } 
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-payment',
  templateUrl: './bus-payment.page.html',
  styleUrls: ['./bus-payment.page.scss'],
})
export class BusPaymentPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

bus_ticket() {
    this.route.navigate(['./bus-ticket']);
  } 
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cab-payment',
  templateUrl: './cab-payment.page.html',
  styleUrls: ['./cab-payment.page.scss'],
})
export class CabPaymentPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
cab_ticket() {
    this.route.navigate(['./cab-ticket']);
  } 
}

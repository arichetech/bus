import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train-payment',
  templateUrl: './train-payment.page.html',
  styleUrls: ['./train-payment.page.scss'],
})
export class TrainPaymentPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

tain_ticket() {
    this.route.navigate(['./tain-ticket']);
  } 
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cab-info',
  templateUrl: './cab-info.page.html',
  styleUrls: ['./cab-info.page.scss'],
})
export class CabInfoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

cab_confirm_booking() {
    this.route.navigate(['./cab-confirm-booking']);
  } 
}

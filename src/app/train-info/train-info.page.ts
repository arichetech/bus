import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train-info',
  templateUrl: './train-info.page.html',
  styleUrls: ['./train-info.page.scss'],
})
export class TrainInfoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
      
  }
 confirm_booking() {
    this.route.navigate(['./train-confirm-booking']);
  } 
}

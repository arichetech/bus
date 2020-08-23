import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homestay-info',
  templateUrl: './homestay-info.page.html',
  styleUrls: ['./homestay-info.page.scss'],
})
export class HomestayInfoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 homestay_confirm_booking() {
    this.route.navigate(['./homestay-confirm-booking']);
  }   
 homestay_map() {
    this.route.navigate(['./homestay-map']);
  }  
 homestay_review() {
    this.route.navigate(['./homestay-review']);
  }   
 homestay_photos() {
    this.route.navigate(['./homestay-photos']);
  }  
 list_of_homestay() {
    this.route.navigate(['./list-of-homestay']);
  }  
}

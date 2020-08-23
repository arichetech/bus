import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holiday-info',
  templateUrl: './holiday-info.page.html',
  styleUrls: ['./holiday-info.page.scss'],
})
export class HolidayInfoPage implements OnInit {
  booking_day: string = "day_a";
  constructor(private route: Router) { }

  ngOnInit() {
  }
 holiday_confirm_booking() {
    this.route.navigate(['./holiday-confirm-booking']);
  }  
}

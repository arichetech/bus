import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holiday-booked',
  templateUrl: './holiday-booked.page.html',
  styleUrls: ['./holiday-booked.page.scss'],
})
export class HolidayBookedPage implements OnInit {
 booking_day: string = "day_a";
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.page.html',
  styleUrls: ['./holiday-list.page.scss'],
})
export class HolidayListPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
 holiday_info() {
    this.route.navigate(['./holiday-info']);
  } 
}

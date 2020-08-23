import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-holiday',
  templateUrl: './search-holiday.page.html',
  styleUrls: ['./search-holiday.page.scss'],
})
export class SearchHolidayPage implements OnInit {
   month: string = "1";
  constructor(private route: Router) { }

  ngOnInit() {
  }

holiday_list() {
    this.route.navigate(['./holiday-list']);
  } 
}

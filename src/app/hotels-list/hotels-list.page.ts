import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.page.html',
  styleUrls: ['./hotels-list.page.scss'],
})
export class HotelsListPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 filter() {
    this.route.navigate(['./filter']);
  } 
 hotel_info() {
    this.route.navigate(['./hotel-info']);
  }  
 hotel_map() {
    this.route.navigate(['./hotel-map']);
  }    
}

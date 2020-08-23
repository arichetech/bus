import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-list-of-homestay',
  templateUrl: './list-of-homestay.page.html',
  styleUrls: ['./list-of-homestay.page.scss'],
})
export class ListOfHomestayPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

homestay_info() {
    this.route.navigate(['./homestay-info']);
  } 
 homestay_map() {
    this.route.navigate(['./homestay-map']);
  } 
 filter() {
    this.route.navigate(['./filter']);
  } 
}

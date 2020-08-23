import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.page.html',
  styleUrls: ['./bus-list.page.scss'],
})
export class BusListPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 bus_info() {
    this.route.navigate(['./bus-info']);
  } 
 filter() {
    this.route.navigate(['./filter']);
  } 
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cab-list',
  templateUrl: './cab-list.page.html',
  styleUrls: ['./cab-list.page.scss'],
})
export class CabListPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

cab_info() {
    this.route.navigate(['./cab-info']);
  }  
}

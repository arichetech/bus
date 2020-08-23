import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train-result',
  templateUrl: './train-result.page.html',
  styleUrls: ['./train-result.page.scss'],
})
export class TrainResultPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
train_info() {
    this.route.navigate(['./train-info']);
  }  
}

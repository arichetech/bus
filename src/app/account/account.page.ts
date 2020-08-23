import { Component, OnInit, Inject } from '@angular/core';
import { Router} from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private route: Router, @Inject(APP_CONFIG) public config: AppConfig) { }

  ngOnInit() {
  }

 my_profile() {
    this.route.navigate(['./my-profile']);
  } 
 support() {
    this.route.navigate(['./support']);
  }
 about_us() {
    this.route.navigate(['./about-us']);
  } 
 condition() {
    this.route.navigate(['./condition']);
  }
 my_reviews() {
    this.route.navigate(['./my-reviews']);
  } 
 signin() {
    this.route.navigate(['./sign-in']);
  }
 select_language() {
    this.route.navigate(['./select-language']);
  } 
developed_by() {
   window.open("https://opuslab.works/", '_system', 'location=no');
 }   
 
 buyAppAction() {
  window.open("https://bit.ly/cc2_TripUp", '_system', 'location=no');
}   
}

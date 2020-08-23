import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'


@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.page.html',
  styleUrls: ['./verification-code.page.scss'],
})
export class VerificationCodePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

 tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  } 
 
}

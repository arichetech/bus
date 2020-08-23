import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-info',
  templateUrl: './bus-info.page.html',
  styleUrls: ['./bus-info.page.scss'],
})
export class BusInfoPage implements OnInit {
   seat1 = false;
   seatB3 = true;
   seatB4 = false;
   seatB5 = false;
   seatB6 = false;
   seatB8 = false;
   seatB9 = false;
   seatB11 = false;
   seatA1 = false;
   seatA2 = false;
   seatA5 = false;
   seatA6 = false;
   seatB12 = false;
   seatB14 = false;
   seatB18 = false;
   seatB20 = false;
   seatA8 = false; 
   seatA9 = false;
   seatA11 = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }

   toggleBusSeat1(){
   this.seat1 = !this.seat1;
   }
   toggleBusSeatB3(){
   this.seatB3 = !this.seatB3;
   }
   toggleBusSeatB4(){
   this.seatB4 = !this.seatB4;
   }
   toggleBusSeatB5(){
   this.seatB5 = !this.seatB5;
   }
   toggleBusSeatB6(){
   this.seatB6 = !this.seatB6;
   } 
    toggleBusSeatB9(){
   this.seatB9 = !this.seatB9;
   }
   toggleBusSeatB8(){
   this.seatB8 = !this.seatB8;
   }
   toggleBusSeatB11(){
   this.seatB11 = !this.seatB11;
   }
   toggleBusSeatA1(){
   this.seatA1 = !this.seatA1;
   }
   toggleBusSeatA2(){
   this.seatA2 = !this.seatA2;
   }  
   toggleBusSeatA5(){
    this.seatA5 = !this.seatA5;
   }  
   toggleBusSeatA6(){
   this.seatA6 = !this.seatA6;
   } 
   toggleBusSeatB12(){
   this.seatB12 = !this.seatB12;
   } 
   toggleBusSeatB14(){
   this.seatB14 = !this.seatB14;
   } 
   toggleBusSeatB18(){
   this.seatB18 = !this.seatB18;
   } 
   toggleBusSeatB20(){
   this.seatB20 = !this.seatB20;
   } 
   toggleBusSeatA8(){
   this.seatA8 = !this.seatA8;
   } 
   toggleBusSeatA9(){
   this.seatA9 = !this.seatA9;
   } 
   toggleBusSeatA11(){
   this.seatA11 = !this.seatA11;
   }    
    
 bus_confirm_booking() {
    this.route.navigate(['./bus-confirm-booking']);
  } 
        
}

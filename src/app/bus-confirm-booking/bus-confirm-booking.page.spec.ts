import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusConfirmBookingPage } from './bus-confirm-booking.page';

describe('BusConfirmBookingPage', () => {
  let component: BusConfirmBookingPage;
  let fixture: ComponentFixture<BusConfirmBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusConfirmBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusConfirmBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

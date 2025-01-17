import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CabConfirmBookingPage } from './cab-confirm-booking.page';

describe('CabConfirmBookingPage', () => {
  let component: CabConfirmBookingPage;
  let fixture: ComponentFixture<CabConfirmBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabConfirmBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CabConfirmBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

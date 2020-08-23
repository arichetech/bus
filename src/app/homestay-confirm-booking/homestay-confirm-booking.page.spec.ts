import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomestayConfirmBookingPage } from './homestay-confirm-booking.page';

describe('HomestayConfirmBookingPage', () => {
  let component: HomestayConfirmBookingPage;
  let fixture: ComponentFixture<HomestayConfirmBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomestayConfirmBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayConfirmBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

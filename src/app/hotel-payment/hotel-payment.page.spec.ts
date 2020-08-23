import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelPaymentPage } from './hotel-payment.page';

describe('HotelPaymentPage', () => {
  let component: HotelPaymentPage;
  let fixture: ComponentFixture<HotelPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

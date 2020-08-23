import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HolidayPaymentPage } from './holiday-payment.page';

describe('HolidayPaymentPage', () => {
  let component: HolidayPaymentPage;
  let fixture: ComponentFixture<HolidayPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HolidayPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

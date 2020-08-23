import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusPaymentPage } from './bus-payment.page';

describe('BusPaymentPage', () => {
  let component: BusPaymentPage;
  let fixture: ComponentFixture<BusPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

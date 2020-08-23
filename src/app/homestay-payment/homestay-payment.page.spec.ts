import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomestayPaymentPage } from './homestay-payment.page';

describe('HomestayPaymentPage', () => {
  let component: HomestayPaymentPage;
  let fixture: ComponentFixture<HomestayPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomestayPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrainPaymentPage } from './train-payment.page';

describe('TrainPaymentPage', () => {
  let component: TrainPaymentPage;
  let fixture: ComponentFixture<TrainPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

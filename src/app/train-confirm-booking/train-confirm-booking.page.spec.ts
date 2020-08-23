import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrainConfirmBookingPage } from './train-confirm-booking.page';

describe('TrainConfirmBookingPage', () => {
  let component: TrainConfirmBookingPage;
  let fixture: ComponentFixture<TrainConfirmBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainConfirmBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainConfirmBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

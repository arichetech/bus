import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelBookedPage } from './hotel-booked.page';

describe('HotelBookedPage', () => {
  let component: HotelBookedPage;
  let fixture: ComponentFixture<HotelBookedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelBookedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelBookedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

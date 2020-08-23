import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HolidayBookedPage } from './holiday-booked.page';

describe('HolidayBookedPage', () => {
  let component: HolidayBookedPage;
  let fixture: ComponentFixture<HolidayBookedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayBookedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HolidayBookedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

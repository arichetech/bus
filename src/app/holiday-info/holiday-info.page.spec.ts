import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HolidayInfoPage } from './holiday-info.page';

describe('HolidayInfoPage', () => {
  let component: HolidayInfoPage;
  let fixture: ComponentFixture<HolidayInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HolidayInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

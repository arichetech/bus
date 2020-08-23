import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlightInfoPage } from './flight-info.page';

describe('FlightInfoPage', () => {
  let component: FlightInfoPage;
  let fixture: ComponentFixture<FlightInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

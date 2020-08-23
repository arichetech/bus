import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlightTicketPage } from './flight-ticket.page';

describe('FlightTicketPage', () => {
  let component: FlightTicketPage;
  let fixture: ComponentFixture<FlightTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

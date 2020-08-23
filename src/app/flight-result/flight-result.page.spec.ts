import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlightResultPage } from './flight-result.page';

describe('FlightResultPage', () => {
  let component: FlightResultPage;
  let fixture: ComponentFixture<FlightResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

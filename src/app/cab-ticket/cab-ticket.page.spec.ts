import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CabTicketPage } from './cab-ticket.page';

describe('CabTicketPage', () => {
  let component: CabTicketPage;
  let fixture: ComponentFixture<CabTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CabTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

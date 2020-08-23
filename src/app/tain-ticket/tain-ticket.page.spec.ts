import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TainTicketPage } from './tain-ticket.page';

describe('TainTicketPage', () => {
  let component: TainTicketPage;
  let fixture: ComponentFixture<TainTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TainTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TainTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

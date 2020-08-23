import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomestayBookedPage } from './homestay-booked.page';

describe('HomestayBookedPage', () => {
  let component: HomestayBookedPage;
  let fixture: ComponentFixture<HomestayBookedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomestayBookedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayBookedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelReviewPage } from './hotel-review.page';

describe('HotelReviewPage', () => {
  let component: HotelReviewPage;
  let fixture: ComponentFixture<HotelReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

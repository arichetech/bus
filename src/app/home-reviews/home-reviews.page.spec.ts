import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeReviewsPage } from './home-reviews.page';

describe('HomeReviewsPage', () => {
  let component: HomeReviewsPage;
  let fixture: ComponentFixture<HomeReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeReviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

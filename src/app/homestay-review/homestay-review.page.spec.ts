import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomestayReviewPage } from './homestay-review.page';

describe('HomestayReviewPage', () => {
  let component: HomestayReviewPage;
  let fixture: ComponentFixture<HomestayReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomestayReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

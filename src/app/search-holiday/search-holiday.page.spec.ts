import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchHolidayPage } from './search-holiday.page';

describe('SearchHolidayPage', () => {
  let component: SearchHolidayPage;
  let fixture: ComponentFixture<SearchHolidayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHolidayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchHolidayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

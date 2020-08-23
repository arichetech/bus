import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchHomestayPage } from './search-homestay.page';

describe('SearchHomestayPage', () => {
  let component: SearchHomestayPage;
  let fixture: ComponentFixture<SearchHomestayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHomestayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchHomestayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

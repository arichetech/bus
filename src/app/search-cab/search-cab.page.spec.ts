import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchCabPage } from './search-cab.page';

describe('SearchCabPage', () => {
  let component: SearchCabPage;
  let fixture: ComponentFixture<SearchCabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchTrainPage } from './search-train.page';

describe('SearchTrainPage', () => {
  let component: SearchTrainPage;
  let fixture: ComponentFixture<SearchTrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTrainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

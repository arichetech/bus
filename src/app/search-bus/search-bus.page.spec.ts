import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchBusPage } from './search-bus.page';

describe('SearchBusPage', () => {
  let component: SearchBusPage;
  let fixture: ComponentFixture<SearchBusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

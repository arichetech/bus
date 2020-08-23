import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelsListPage } from './hotels-list.page';

describe('HotelsListPage', () => {
  let component: HotelsListPage;
  let fixture: ComponentFixture<HotelsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

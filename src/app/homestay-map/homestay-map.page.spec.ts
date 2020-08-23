import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomestayMapPage } from './homestay-map.page';

describe('HomestayMapPage', () => {
  let component: HomestayMapPage;
  let fixture: ComponentFixture<HomestayMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomestayMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

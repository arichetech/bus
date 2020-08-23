import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelPhotosPage } from './hotel-photos.page';

describe('HotelPhotosPage', () => {
  let component: HotelPhotosPage;
  let fixture: ComponentFixture<HotelPhotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelPhotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

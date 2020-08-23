import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomestayPhotosPage } from './homestay-photos.page';

describe('HomestayPhotosPage', () => {
  let component: HomestayPhotosPage;
  let fixture: ComponentFixture<HomestayPhotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomestayPhotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

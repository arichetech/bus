import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomestayInfoPage } from './homestay-info.page';

describe('HomestayInfoPage', () => {
  let component: HomestayInfoPage;
  let fixture: ComponentFixture<HomestayInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomestayInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomestayInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

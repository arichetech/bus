import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CabInfoPage } from './cab-info.page';

describe('CabInfoPage', () => {
  let component: CabInfoPage;
  let fixture: ComponentFixture<CabInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CabInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

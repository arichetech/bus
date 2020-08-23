import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CabListPage } from './cab-list.page';

describe('CabListPage', () => {
  let component: CabListPage;
  let fixture: ComponentFixture<CabListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CabListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

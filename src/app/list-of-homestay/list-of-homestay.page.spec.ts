import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListOfHomestayPage } from './list-of-homestay.page';

describe('ListOfHomestayPage', () => {
  let component: ListOfHomestayPage;
  let fixture: ComponentFixture<ListOfHomestayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfHomestayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListOfHomestayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

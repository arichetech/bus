import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrainInfoPage } from './train-info.page';

describe('TrainInfoPage', () => {
  let component: TrainInfoPage;
  let fixture: ComponentFixture<TrainInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

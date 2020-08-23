import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrainResultPage } from './train-result.page';

describe('TrainResultPage', () => {
  let component: TrainResultPage;
  let fixture: ComponentFixture<TrainResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

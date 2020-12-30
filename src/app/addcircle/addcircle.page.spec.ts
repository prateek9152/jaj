import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcirclePage } from './addcircle.page';

describe('AddcirclePage', () => {
  let component: AddcirclePage;
  let fixture: ComponentFixture<AddcirclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcirclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcirclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

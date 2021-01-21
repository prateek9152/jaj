import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycontactPage } from './mycontact.page';

describe('MycontactPage', () => {
  let component: MycontactPage;
  let fixture: ComponentFixture<MycontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycontactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

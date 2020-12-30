import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgotverifyPage } from './forgotverify.page';

describe('ForgotverifyPage', () => {
  let component: ForgotverifyPage;
  let fixture: ComponentFixture<ForgotverifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotverifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotverifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

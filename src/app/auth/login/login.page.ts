import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {  AlertController, MenuController, Platform } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import {LoaderService} from '../../services/loader.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';
import {Storage} from '@ionic/storage';
import { SettingsService } from '../../services/settings.service';
import { CommonService } from '../../services/common.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;
  submitted = false;
  diviceToken: string;
  public alertPresented: any;
  returnUrl: string;
  public err: any; 

  constructor(private router: Router,public menuCtrl:MenuController,public formBuilder: FormBuilder,
    private toastService:ToastService, private ionLoader:LoaderService, private http:HttpClient, public storage: Storage,
    private authService:AuthService,private alertController:AlertController,private settingsService:SettingsService,private commonService:CommonService,
    private platform:Platform,private alertService:AlertService,        private route: ActivatedRoute,
    ) {
    
    // this.menuCtrl.enable(false,"first");

   }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      emailOrPrimaryMobile: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('[a-zA-Z0-9_.+-]+@(?:[a-zA-Z0-9-]+\.)\.[A-Za-z0-9._%+-]{2,}'),
        //  Validators.pattern('[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gmail|wdipl|yahoo|live|outlook|hotmail|yopmail|gmx)\.[A-Za-z0-9._%+-]{2,}')
      ])),
        // phone: new FormControl('', Validators.compose([
        //   Validators.minLength(10),
        //   Validators.required,
        // ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9!$%@#£€*?&]+$')
      ]))
    });
      this.returnUrl = this.route.snapshot.queryParams['returnedUrl'] || '/';
  }
  get f() { return this.validations_form.controls; }

  validation_messages = {
    emailOrPrimaryMobile: [
      { type: 'required', message: 'Email Or Mobile is required.' },
      // { type: 'pattern', message: 'Enter a valid email' }
    ],
    // 'phone': [
    //   { type: 'required', message: 'Phone is required.' },
    //   { type: 'minlength', message: 'Phone Number must be at least 10 digits.' }
    // ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain uppercase, lowercase, special chars and number.' }
    ],
  };
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewDidLeave(){this.menuCtrl.enable(true)}
forgot(){
  this.router.navigate(['/menu/forgot']);
}
login(){
  this.submitted = true;
  if(this.validations_form.invalid){

  return;
  }
  this.authService.login(this.f.emailOrPrimaryMobile.value,this.f.password.value).pipe(first()).subscribe(data => {
      console.log(data);
      this.authService.updateUserDetails(data);
      this.authService.setLoggedIn(true);
      this.alertService.confirmationAlert('Thank you','Login Successfully.');
      this.router.navigate(['/menu/home'],{skipLocationChange:true});
  },error => {
      this.alertService.show('Alert',error.message) ;
  })

  
  
  

}

register(){
  this.router.navigate(['/menu/signup']);
}
}

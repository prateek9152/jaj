import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {  MenuController, Platform } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastService } from '../services/toast.service';
import {LoaderService} from '../services/loader.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import {Storage} from '@ionic/storage';
import { SettingsService } from '../services/settings.service';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;
  submitted = false;
  diviceToken: string;

  constructor(private router: Router,public menuCtrl:MenuController,public formBuilder: FormBuilder,
    private toastService:ToastService, private ionLoader:LoaderService, private http:HttpClient, public storage: Storage,
    private authService:AuthService,private alertService:AlertService,private settingsService:SettingsService,private commonService:CommonService,
    private platform:Platform ) {
    
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
  var formData: any = new FormData();
  formData.append("emailOrPrimaryMobile",this.validations_form.get('emailOrPrimaryMobile').value);
  formData.append("password",this.validations_form.get('password').value);
  let headers = new HttpHeaders({"Accept": "application/json"});
  console.log(formData);
  this.authService.userLogin(this.validations_form.value).subscribe((response:any)=> {
      if(response){
          this.authService.updateUserDetails(response);
          this.router.navigate(['/menu/home']);
      }
      else {
        
      }
       


      //  this.registerForm.reset();
    
      
  })
  // this.http.post('https://ionicinto.wdipl.com/mychat/api/login',formData,{headers:headers}).subscribe(async (response:any)=> {
  // console.log("loginResponce:"+JSON.stringify(response));
  // console.log(response.status);
  // this.router.navigate(['/menu/home']);

  // //  if(response.status==1){
  // //   //  this.authService.updateUserDetails(response.data);
  // //    this.toastService.showLoginToast();

  // //  }
  // //   else {
  // //     // this.alertService.show('Alert',response.message);
   
  // //   }
  // })
  
  

}

register(){
  this.router.navigate(['/menu/signup']);
}
}

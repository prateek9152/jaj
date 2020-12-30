import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastService } from '../services/toast.service';
import {LoaderService} from '../services/loader.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;
  submitted = false;

  constructor(private router: Router,public menuCtrl:MenuController,public formBuilder: FormBuilder,
    private toastService:ToastService, private ionLoader:LoaderService, private http:HttpClient,private authService:AuthService ) {
    
    // this.menuCtrl.enable(false,"first");

   }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
       
        phone: new FormControl('', Validators.compose([
          Validators.minLength(10),
          Validators.required,
        ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9!$%@#£€*?&]+$')
      ]))
    });
  }
  get f() { return this.validations_form.controls; }

  validation_messages = {
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'minlength', message: 'Phone Number must be at least 10 digits.' }
    ],
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
  // var formData: any = new FormData();
  // formData.append("email",this.validations_form.get('email').value);
  // formData.append("password",this.validations_form.get('password').value);
  // let headers = new HttpHeaders({"Accept": "application/json"});
  // console.log(formData);
  this.router.navigate(['/menu/home']);
  // this.http.post('https://jajoj.threethree.in/api/login',formData,{headers:headers}).subscribe((response:any)=> {
  // this.router.navigate(['/menu/home']);
  // console.log(response);

  //  if(response.status==1){
  //    this.authService.updateUserDetails(response.data);
  //    this.router.navigate(['/menu/home']);
  //    this.toastService.showLoginToast();

  //  }
  //   else {
      
  //   }
  // })
  
  

}

register(){
  this.router.navigate(['/menu/signup']);
}
}

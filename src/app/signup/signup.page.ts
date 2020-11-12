import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { MenuController,ModalController,NavController } from '@ionic/angular';
import {MustMatch} from '.././_helpers/must-match.validator';
import {UsernameValidator} from '../_helpers/username.validator';
import {PhoneValidator} from '../_helpers/phone.validator';
import { LoginPage } from '../login/login.page';
import {ToastService} from '.././toast.service';
import {LoaderService} from '../loader.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  pTypeName: any = 'password';
  cTypeName: any = 'password';
  registerForm: FormGroup;
  submitted = false;
  loading = false;
  
  constructor(private router:Router,private menuCtrl:MenuController, 
    private formBuilder:FormBuilder,private modalController:ModalController,
    private toastService:ToastService,private ionLoader:LoaderService,private http:HttpClient,public authService:AuthService) { }

    dismissRegister(){
      this.modalController.dismiss();
    }
    
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('',Validators.compose([
        Validators.required,Validators.minLength(4)
      ])),
      lastName: new FormControl('',Validators.compose([Validators.required,Validators.minLength(2)])),
      username: new FormControl('',Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      phone: new FormControl('',Validators.compose([
        Validators.required,Validators.minLength(10)
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.maxLength(25),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
      ])),     
       confirmPassword: ['',[Validators.required]]
    }, {
      validator: MustMatch('password','confirmPassword')
    });
  }
  
  
  get f() { return this.registerForm.controls; }
  'validation_messages' = {
    firstName: [{type: 'required',message: 'First Name is required'}],
    lastName: [{type: 'required',message: 'Last Name is required'},{type:'minlength',message: 'Last Name must be at least 2 characters long'}],
    username: [   { type: 'required', message: 'Username is required.' },
    { type: 'minlength', message: 'Username must be at least 5 characters long.' },
    { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
    { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
    { type: 'validUsername', message: 'Your username has already been taken.' }],
    phone:[
      { type: 'required', message: 'Mobile Number is required.' },
      { type: 'minlength', message: 'Mobile Number must be at least 10 numbers.' },
      ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
      { type: 'pattern', message: 'Length should be 8(least one uppercase, one lowercase, one special charector and one number)' }

    ],
    confirmPassword: [
      {type: 'required',message: 'Confirm Password is required'},
      { type: 'pattern', message: 'Confirm Password not match.' }
    ]
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  changeTypeP() {
    if (this.pTypeName == 'password') {
      this.pTypeName = 'text'
    } else {
      this.pTypeName = 'password'
    }
  }
  

  changeTypeC() {
    if (this.cTypeName == 'password') {
      this.cTypeName = 'text'
    } else {
      this.cTypeName = 'password'
    }
  }
  signup(){
    this.submitted = true;
    if(this.registerForm.invalid){

    return;
    }
    // var formData: any = new FormData();
    // formData.append("firstName", this.registerForm.get('firstName').value);
    // formData.append("lastName", this.registerForm.get('lastName').value);
    // formData.append("username", this.registerForm.get('username').value);
    // formData.append("phone", this.registerForm.get('phone').value);
    // formData.append("password", this.registerForm.get('password').value);
    // formData.append("confirmPassword", this.registerForm.get('confirmPassword').value);

    // this.http.post('',formData).subscribe((response:any)=> {
    //   if(response.status==1){
    //     this.authService.updateUserDetails(response.data);
    //   }
    // })
    this.toastService.showToast();
    // this.toastService.presentToast(data['message']);
    this.router.navigate(['/menu/verify'])
    this.ionLoader.showLoader();
    setTimeout(() => {
      this.hideLoader();
    },1000);
  }
  hideLoader(){
    this.ionLoader.hideLoader();
  }
  login(){
    
    this.router.navigate(['/menu/login'])

  }
  
}

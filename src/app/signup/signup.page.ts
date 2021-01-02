import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { MenuController,ModalController,NavController } from '@ionic/angular';
import {MustMatch} from '.././_helpers/must-match.validator';
import {UsernameValidator} from '../_helpers/username.validator';
import {PhoneValidator} from '../_helpers/phone.validator';
import { LoginPage } from '../login/login.page';
import {ToastService} from '../services/toast.service';
import {LoaderService} from '../services/loader.service';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Storage} from '@ionic/storage';
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
  userData={
    name: "",
    email: "",
    password: "",
    c_password: ""
  }
  
  constructor(private router:Router,private menuCtrl:MenuController, 
    private formBuilder:FormBuilder,private modalController:ModalController,
    private toastService:ToastService,private ionLoader:LoaderService,
    private http:HttpClient,public authService:AuthService, private storage:Storage) { }

    dismissRegister(){
      this.modalController.dismiss();
    }
    
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('',Validators.compose([
        Validators.required,Validators.minLength(4)
      ])),
      last_name: new FormControl('',Validators.compose([Validators.required,Validators.minLength(2)])),
      user_name: new FormControl('',Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9_.+-]+@(?:[a-zA-Z0-9-]+\.)\.[A-Za-z0-9._%+-]{2,}'),
        //  Validators.pattern('[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gmail|wdipl|yahoo|live|outlook|hotmail|yopmail|gmx)\.[A-Za-z0-9._%+-]{2,}')
      ])),
      primary_mobile_number:new FormControl('',Validators.compose([
        Validators.required,Validators.minLength(10)
      ])),
      secondary_mobile_number:new FormControl('',Validators.compose([
        Validators.required,Validators.minLength(10)
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.maxLength(25),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
      ])),     
       c_password: ['',[Validators.required]]
    }, {
      validator: MustMatch('password','c_password')
    });
  }
  
  
  get f() { return this.registerForm.controls; }
  'validation_messages' = {
    name: [{type: 'required',message: 'First Name is required'}],
    last_name: [{type: 'required',message: 'Last Name is required'},{type:'minlength',message: 'Last Name must be at least 2 characters long'}],
    user_name: [   { type: 'required', message: 'Username is required.' },
    { type: 'minlength', message: 'Username must be at least 5 characters long.' },
    { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
    { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
    { type: 'validUsername', message: 'Your username has already been taken.' }],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    primary_mobile_number:[
      { type: 'required', message: 'Mobile Number is required.' },
      { type: 'minlength', message: 'Mobile Number must be at least 10 numbers.' },
      ],
      secondary_mobile_number:[
        { type: 'required', message: 'Mobile Number is required.' },
        { type: 'minlength', message: 'Mobile Number must be at least 10 numbers.' },
        ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
      { type: 'pattern', message: 'Length should be 8(least one uppercase, one lowercase, one special charector and one number)' }

    ],
    c_password: [
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

    var formData = new FormData();
    formData.append("name",this.registerForm.get('name').value);
    formData.append("last_name",this.registerForm.get('last_name').value);
    formData.append("user_name",this.registerForm.get('user_name').value);
    formData.append("primary_mobile_number",this.registerForm.get('primary_mobile_number').value);

    formData.append("secondary_mobile_number",this.registerForm.get('secondary_mobile_number').value);
    formData.append("email",this.registerForm.get('email').value);
    formData.append("password",this.registerForm.get('password').value);
    formData.append("c_password",this.registerForm.get('c_password').value);

    let headers = new HttpHeaders({"Accept": "application/json"});
    this.http.post('https://intoactive.wdipl.com/mychat/api/register',formData,{headers:headers}).subscribe(async (response:any)=> {
              this.router.navigate(['/menu/verify']);
    //         if(response.status==1){
    //           this.storage.set('userData', this.registerForm.value.email);
    //           this.storage.set('userToken',response.userToken);
   
    //             this.toastService.showToast();
    //         this.toastService.showToast();
    //         this.ionLoader.showLoader();
    // setTimeout(() => {
    //   this.hideLoader();
    // },1000);
              

    //         }
    })


   
    
   
  }
  hideLoader(){
    this.ionLoader.hideLoader();
  }
  login(){
    
    this.router.navigate(['/menu/login'])

  }
  
}

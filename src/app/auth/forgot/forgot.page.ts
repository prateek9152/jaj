import { Component, OnInit } from '@angular/core';
import {NavController,MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  forgotForm: FormGroup;
  submitted = false;
  constructor(public navCtrl:NavController,private router:Router,private menuCtrl:MenuController,private fb:FormBuilder) { }

  ngOnInit() {
    this.forgotForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9_.+-]+@(?:[a-zA-Z0-9-]+\.)\.[A-Za-z0-9._%+-]{2,}'),
        //  Validators.pattern('[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gmail|wdipl|yahoo|live|outlook|hotmail|yopmail|gmx)\.[A-Za-z0-9._%+-]{2,}')
      ])),
      // phone: new FormControl('', Validators.compose([
      //   Validators.minLength(10),
      //   Validators.required,
      // ])),
    })
  }
  get f(){return this.forgotForm.controls};

  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    // 'phone': [
    //   {type: 'required', message: 'Phone is required.'},
    //   {type: 'minlength', message: 'Phone Number must be at least 10 digits.' }
    // ]
  }
  ionViewWillEnter() {
    // this.menuCtrl.enable(false);
  }
  goBack(){
    this.navCtrl.back();
  }
  send(){
    this.submitted = true;
    if(this.forgotForm.invalid){
      return;
    }
    this.router.navigate(['/menu/forgotverify']);
  }
}

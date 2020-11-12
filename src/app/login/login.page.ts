import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastService } from '../toast.service';
import {LoaderService} from '../loader.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;
  submitted = false;

  constructor(private router: Router,public menuCtrl:MenuController,public formBuilder: FormBuilder,
    private toastService:ToastService, private ionLoader:LoaderService ) {
    
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
  this.toastService.showLoginToast();
  

this.router.navigateByUrl('/menu/home');
}

register(){
  this.router.navigate(['/menu/signup']);
}
}

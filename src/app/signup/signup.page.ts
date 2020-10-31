import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  pTypeName: any = 'password';
  cTypeName: any = 'password';
  constructor(private router:Router,private menuCtrl:MenuController) { }

  ngOnInit() {
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
    this.router.navigate(['/menu/verify'])
  }
  login(){
    this.router.navigate(['/menu/login'])

  }
  
}

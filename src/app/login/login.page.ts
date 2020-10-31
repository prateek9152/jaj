import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,public menuCtrl:MenuController) {
    
    // this.menuCtrl.enable(false,"first");

   }

  ngOnInit() {

  }
  ionViewWillEnter() {
    // this.menuCtrl.enable(false);
  }
forgot(){
  this.router.navigate(['/menu/forgot']);
}
login(){
this.router.navigateByUrl('/menu/home');
}
register(){
  this.router.navigate(['/menu/signup']);
}
}

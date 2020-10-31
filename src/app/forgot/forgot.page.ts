import { Component, OnInit } from '@angular/core';
import {NavController,MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  constructor(public navCtrl:NavController,private router:Router,private menuCtrl:MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    // this.menuCtrl.enable(false);
  }
  goBack(){
    this.navCtrl.back();
  }
  send(){
    this.router.navigate(['/menu/forgotverify']);
  }
}

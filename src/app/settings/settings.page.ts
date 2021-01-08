import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public navCtrl:NavController,private menuCtrl:MenuController,private router:Router) { }

  ngOnInit() {
  }
  change(){}
  terms(){
    this.router.navigate(['/menu/terms']);
  }
  privacy(){}
  posting(){}
  contact(){this.router.navigate(['/menu/contact']);
}
  goBack(){
    this.navCtrl.back();
  }
  ionViewWillEnter() {
    // this.menuCtrl.enable(false);
  }
}

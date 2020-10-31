import { Component, OnInit } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public navCtrl:NavController,private menuCtrl:MenuController) { }

  ngOnInit() {
  }
  change(){}
  terms(){}
  privacy(){}
  posting(){}
  contact(){}
  goBack(){
    this.navCtrl.back();
  }
  ionViewWillEnter() {
    // this.menuCtrl.enable(false);
  }
}

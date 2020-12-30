import { Component, OnInit } from '@angular/core';
import {NavController,MenuController} from '@ionic/angular';
@Component({
  selector: 'app-addcircle',
  templateUrl: './addcircle.page.html',
  styleUrls: ['./addcircle.page.scss'],
})
export class AddcirclePage implements OnInit {

  constructor(public menuCtrl:MenuController,public navCtrl:NavController) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    // this.menuCtrl.enable(false);
  }
  goBack(){
    this.navCtrl.back();
  }
  chatdetail(){}
  getItems(){}
}

import { Component, OnInit } from '@angular/core';
import { NavController,MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mycontact',
  templateUrl: './mycontact.page.html',
  styleUrls: ['./mycontact.page.scss'],
})
export class MycontactPage implements OnInit {

  constructor(public navCtrl:NavController,public menuCtrl:MenuController) { }

  ngOnInit() {
  }
chatdetail(){}
invite(){}
getItems(){}
goBack(){
  this.navCtrl.back();
}
ionViewWillEnter() {
  // this.menuCtrl.enable(false);
}
}

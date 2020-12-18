import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.page.html',
  styleUrls: ['./addgroup.page.scss'],
})
export class AddgroupPage implements OnInit {

  constructor(public menuCtrl:MenuController,public navCtrl:NavController,private commonService:CommonService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    // this.menuCtrl.enable(false);
    setTimeout(() => {
      this.data = {
      };
    }, 1000);
  }
  goBack(){
    this.navCtrl.back();
  }
  
  
  data: any;
  
  showProgramGroup(){
    // this.commonService.presentModal(GroupusersmodalComponent,'halfModal');
  }
}

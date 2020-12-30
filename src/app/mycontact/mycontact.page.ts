import { Component, OnInit } from '@angular/core';
import { NavController,MenuController,AlertController } from '@ionic/angular';
@Component({
  selector: 'app-mycontact',
  templateUrl: './mycontact.page.html',
  styleUrls: ['./mycontact.page.scss'],
})
export class MycontactPage implements OnInit {

  constructor(public navCtrl:NavController,public menuCtrl:MenuController, public alertController:AlertController) { }

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

    async showModal(){
      const alert = await this.alertController.create({
        
        header: 'Thanks You For Your Request!',
        message: '',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Okay',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });
  
      await alert.present();
    }
}

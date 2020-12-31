import { Component, OnInit } from '@angular/core';
import { NavController,MenuController,AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-mycontact',
  templateUrl: './mycontact.page.html',
  styleUrls: ['./mycontact.page.scss'],
})
export class MycontactPage implements OnInit {
  filterTerm: string;
  constructor(public navCtrl:NavController,public menuCtrl:MenuController, public alertController:AlertController,private router:Router) { }

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

    userRecords = [{
      "id": 1,
      "name": "Simon",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
    },
    {
      "id": 7,
      "name": "Kurtis",
    },
    {
      "id": 8,
      "name": "Nicholas ",
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
    }
  ]
    message(){
      this.router.navigate(['/menu/chatdetails']);
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

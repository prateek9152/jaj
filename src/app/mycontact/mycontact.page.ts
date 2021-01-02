import { Component, OnInit } from '@angular/core';
import { NavController,MenuController,AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import {
	Contacts,
	Contact,
	ContactName,
	ContactField,
} from '@ionic-native/contacts/ngx';
@Component({
  selector: 'app-mycontact',
  templateUrl: './mycontact.page.html',
  styleUrls: ['./mycontact.page.scss'],
})
export class MycontactPage implements OnInit {
  filterTerm: string;
  myContacts: Contact[] = [];
  constructor(public navCtrl:NavController,		private contacts: Contacts,public menuCtrl:MenuController, public alertController:AlertController,private router:Router) { }

  ngOnInit() {
    let options = {
      filter: '',
      multiple: true,
      hasPhoneNumber: true,
    };

    this.contacts.find(['*'], options).then((contacts: Contact[]) => {
      this.myContacts = contacts;
      console.log('Contacts: ', contacts);
    });
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
    loadContacts() {
  
    }
    // createContact() {
    //   let contact: Contact = this.contacts.create();
  
    //   contact.name = new ContactName(null, 'Albus', 'Ape');
    //   contact.phoneNumbers = [new ContactField('mobile', '12345678')];
    //   contact.save().then(
    //     async () => {
    //       let toast = await this.toastCtrl.create({
    //         message: 'Contact added',
    //       });
    //       toast.present;
    //     },
    //     (error: any) => console.error('Error saving contact', error)
    //   );
    // }
}

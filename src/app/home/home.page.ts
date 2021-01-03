import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { RequestsModalComponent } from '../requests-modal/requests-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['./../app.component.scss','home.page.scss'],
})
export class HomePage implements OnInit {
  type: string;
  public show:boolean = false;
  public buttonName:any = 'Show';
  weather = 'sunny';
  backButtonSubscription; 
  public subscription: any;
  resultData: any = [];
  filterTerm: string;
  chatType : any;
  room : any;
  receiverID : any;
  constructor(
    private router:Router,
    private platform: Platform,
    private auth:AuthService,
    private modalController:ModalController
    ) {
      this.type = "chat";
    }
  ngOnInit(){
    this.chatType = 1;
    this.room = '';
    this.receiverID = '';
   let data = {
     "id" : this.auth.getCurrentUserId()
   };
  //  this.resultData = 
  //  this.auth.get(data,'details').subscribe(
  //   (response:any) =>{
  //     console.log(response)
  //     if(response.status==0){
  //       this.resultData = response;


  //       this.router.navigate(['/menu/home']);
  //     }
  //     else {
  //       this.auth.updateUserDetails(response.data);
  //     }
    // let data = {
    //   "id": this.auth.getCurrentUserId()
    // };
    // console.log(data);
  
  }
  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
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
  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }  
  toggle(){
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
details(){}
chatdetail(){
  this.router.navigate(['/menu/chatdetails/'+this.receiverID+'/'+this.room+'/'+this.chatType]);
}
filter() {
}
mycontact(){
  this.router.navigate(['/menu/mycontact']);
}
addgroup(){
  this.router.navigate(['/menu/addgroup']);
}
addcir(){
  this.router.navigate(['/menu/addcircle']);
}
circle(){
}
contactinfo(){
}
video(){
}
audio(){
}
report(){}
segmentChanged(ev: any) {
  console.log('Segment changed', ev);
}
add(){}
async requests(){
  const modal = await this.modalController.create({

    component: RequestsModalComponent

  });
  return await modal.present();

}
}



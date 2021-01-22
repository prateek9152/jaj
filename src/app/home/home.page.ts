import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { RequestsModalComponent } from '../chatdetails/requests-modal/requests-modal.component';
import {ChatService} from '../services/chat.service';
import { ApiService } from '../services/api.service';
import {NetworkService} from '../services/network.service';
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
  formData:any;
  public items: any;
  requestCount: any = 0;
  unreadchatCount: any = 0;
  requestList : any ;

  userData:any;
  constructor(
    private router:Router,
    private platform: Platform,
    private auth:AuthService,
    private chatService:ChatService,
    private modalController:ModalController,
    private apiService: ApiService,
            public networkService: NetworkService,
    ) {
      this.type = "chat";
      this.userData = this.auth.getUserDetails();
      console.log("pppp", this.userData);
      
    }
  ngOnInit(){
    
       this.auth.getCurrentUserId()
  
        
         this.auth.getNativeCurrentUserId();
        
  this.networkService.initializeNetworkEvents();
  this.chatService.requestsUserList().subscribe((data:any)=> {
    this.requestList = data.requestslist;
    console.log("pppppppaasps",data);
    
})
  }
  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(async() => {
      navigator['app'].exitApp();
    });
    this.displayUserList();
  }
    displayUserList(){
          this.auth.chatUserList().subscribe((data:any) => {
              this.items = data.chatlist;
              this.requestCount = data.requestcount;
              this.unreadchatCount = data.unreadchatcount;
          })
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
chatdetail(receiverID:any,room:any,type:any){
  this.router.navigate(['/menu/chatdetails/'+receiverID+'/'+room+'/'+type]);
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
showRequests(){
  
}

    cancel(){
      this.router.navigate(['/menu/home']);
    }
    // navigate(id : any,senderId:any,type:any){
    //   this.router.navigate(['/access/'+id+'/'+senderId+'/'+type]);
    // }
}



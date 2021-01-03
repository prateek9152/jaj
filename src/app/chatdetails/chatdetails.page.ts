import { Component, OnInit,ViewChild } from '@angular/core';
import { Router ,ActivatedRoute,ParamMap} from '@angular/router';
import { PopoverController,NavController,MenuController,AlertController } from '@ionic/angular';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { CommonService } from 'src/app/services/common.service';
import { IonContent } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chatdetails',
  templateUrl: './chatdetails.page.html',
  styleUrls: ['./chatdetails.page.scss'],
})
export class ChatdetailsPage implements OnInit {
  @ViewChild(IonContent, { read: IonContent,  static: false }) contentArea: IonContent;
  messageBox = false;
  messageButtons = true;
  toggled: boolean = false;
  messageContent: string;
  ioConnection: any;
  message = '';
  messages = [];
  storeMessage = '';
  storeMessages : any;  
  currentUser = '';
  userData:any;
  receiverId :any;
  room : any ;
  user_name : any;
  display_name :any;
  profile_pic : any;
  profilePicUrl : any = 'https://ionicinto.wdipl.com/mychat/public/pic/';
  UserOnLineStatus : any;
  blockstatus : any = 0;
  bSOUser : any = 'unblock';
  bidOUser : any;
  chatDates : string;
  chatType : any;
  groupName : any = '';
  adminId : any = '';
  groupMember : any = '';
  acceptMember : any = '';
  groupImage : any = '';
  groupId : any = '';
  groupMessage = '';
  groupMessages = [];
  groupstoreMessage = '';
  messageDateString : string ;
  lastChatId : any = 0;
  loginId : any;
  constructor(
    public popoverController:PopoverController,
    public navCtrl:NavController,
    public menuCtrl:MenuController,
    private router:Router,
    private actRoute: ActivatedRoute,
    private socket: Socket,
    public commonService:CommonService,
    public alertController: AlertController,) { }

  ngOnInit() {
    this.loginId = 2;
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      // this.room = params.get('room');
      this.room = 'cm9vbS0xMg==';
      //--reciver is ( in private chat is sender id )-----
      // this.receiverId = params.get('receiver');
      this.receiverId = 1;
      // this.chatType = params.get('type');
      this.chatType = 1;
    });
    this.getStart();
    this.privateChat();
  }

  getStart(){   
    this.socket.connect();
    this.currentUser = this.room;
    this.socket.emit('set-name', this.room,this.chatType);
    this.socket.fromEvent('users-changed').subscribe(data => {
      if (data['event'] === 'left') {
        this.UserOnLineStatus = 'is OffLine';
      } else {
        this.UserOnLineStatus = 'is OnLine';
      }
    });    
    this.commonService.dismissLoader();
  }

  privateChat(){
    // this.commonService.presentLoader();
    this.socket.fromEvent('message').subscribe(message => {
      // console.log('message:' + JSON.stringify(message));
      this.messages.push(message);
      this.contentArea.scrollToBottom();
    });
    this.socket.fromEvent('lastChatId').subscribe(lastchatId => {
      this.lastChatId = lastchatId;
    });
    this.socket.fromEvent('blockStatusOfUser').subscribe(blockStatusOfUser => {
      this.bSOUser = blockStatusOfUser['status'];
      this.bidOUser = blockStatusOfUser['blockID'];          
    });
    this.socket.fromEvent('blockStatusOfSelf').subscribe(blockStatusOfSelf => {
      if(blockStatusOfSelf['status'] ==='block'){        
        this.blockstatus = 1;
      }else{
        this.blockstatus = 0;
      }     
    });
    this.socket.fromEvent('storchatdate').subscribe(data => {
      // console.log("storchatdate : "+JSON.stringify(data));
    });

    this.socket.fromEvent('UserOnLineStatus').subscribe(UserOnLineStatus => {
      this.UserOnLineStatus = UserOnLineStatus;
    });

    this.socket.emit("addUser", this.loginId,this.receiverId);
    this.socket.emit("newUser", [this.loginId,this.receiverId, this.room]);
    

    this.socket.emit("storemassagerequest",this.loginId,this.receiverId);

    this.socket.fromEvent('stormessage').subscribe(storMessage => {      
      this.storeMessages = storMessage;
      this.commonService.dismissLoader();
    });

    this.socket.fromEvent('userName').subscribe(data => {
      this.user_name = data[0].user_name;
      this.profile_pic = data[0].profile_picture;   
    });

  }
  sendMessage() {
    if(this.message != '' && this.message != null && this.chatType == 1){
      if(this.bSOUser == 'unblock'){
        this.socket.emit('send-message', { text: this.message, blockstatus : this.blockstatus });
      }else{
        this.blockStatusOfUser(this.bidOUser);
      }   
      this.message = '';   
    }
  }
  async blockStatusOfUser(id : any) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      // header: 'Confirm!',
      message: 'You have to <strong>Unblock</strong> First.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            //--------unblock User through socket-------//
            this.socket.emit("blockevent",'0',id);
          }
        }
      ]
    });
    await alert.present();
  }  
  async presentPopover(ev: any) {
    console.log("this.lastChatId:"+this.lastChatId);
    const popover = await this.popoverController.create({
      component: DropdownComponent,
      event: ev,
      componentProps: {
        userDataid:this.loginId,
        receiverId: this.receiverId,
        bidOUser : this.bidOUser,
        bSOUser:this.bSOUser,
        type:this.chatType,
        lastchatid:this.lastChatId,
        room : this.room,
      },
      translucent: true
    });
    popover.onDidDismiss()
      .then((data) => {
        if(data.data == 'refresh'){
          //
        }else{
          this.bSOUser = data['data'];
          this.socket.emit('userBlockStatus',this.loginId,this.receiverId);
        }
    });
    return await popover.present();   
  }  
  ionViewWillLeave() {
    this.socket.disconnect();
  }
  isDifferentDay(messageIndex: number): boolean {
    if (messageIndex === 0) return true;
    const d1 = new Date(this.storeMessages[messageIndex - 1].created_at);
    const d2 = new Date(this.storeMessages[messageIndex].created_at);
    return (
      d1.getFullYear() !== d2.getFullYear() ||
      d1.getMonth() !== d2.getMonth() ||
      d1.getDate() !== d2.getDate()
    );
  }
  getMessageDate(messageIndex: number): string {
    let dateToday = new Date().toDateString();
    let longDateYesterday = new Date();
    longDateYesterday.setDate(new Date().getDate() - 1);
    let dateYesterday = longDateYesterday.toDateString();
    let today = dateToday.slice(0, dateToday.length - 5);
    let yesterday = dateYesterday.slice(0, dateToday.length - 5);
    const wholeDate = new Date(
      this.storeMessages[messageIndex].created_at
    ).toDateString();
    this.messageDateString = wholeDate.slice(0, wholeDate.length - 5);
    if (
      new Date(this.storeMessages[messageIndex].created_at).getFullYear() ===
      new Date().getFullYear()
    ) {
      if (this.messageDateString === today) {
        return "Today";
      } else if (this.messageDateString === yesterday) {
        return "Yesterday";
      } else {
        return this.messageDateString;
      }
    } else {
      return wholeDate;
    }
  }
  //----------new code end------------------

  ionViewWillEnter(){
    // this.menuCtrl.enable(false);
  }
  video(){}
  audio(){}
  goBack(){
    this.router.navigate(['/menu/home']);
  }

}

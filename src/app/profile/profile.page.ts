import { Component, OnInit } from '@angular/core';
import { MenuController, NavController,ActionSheetController, Platform } from '@ionic/angular';
import { Config } from '../config/config';
import { AuthService } from '../services/auth.service';
import { ImageService } from '../services/image.service';
import {PhotoService} from '../services/photo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  formData: any;
  blobImageName: any;
  useBlobImage: any;
  blobImage: Blob;
  file:any;
  gallaryImgPath: any = [];
  profilePicUrl : any = 'https://ionicinto.wdipl.com/mychat/public/pic/';

  constructor(private menuCtrl:MenuController,private auth:AuthService, private navCtrl: NavController,private imageP:ImageService
    ,public photoService:PhotoService, public actionSheetController:ActionSheetController,public platform:Platform) { 
      
    this.formData = this.auth.getUserDetails();
    console.log('ProfileWeb');
      
       
        
      
  }


  ngOnInit() {
      this.photoService.loadSave();
  }
  getImage(){
    this.imageP.getImage().then((res: any)=> {
      this.formData.file = res;
      this.blobImageName = this.imageP.generateImageName("hello.jpg");
      this.imageP.imgURItoBlob(res).then((blob: any) => {
        this.useBlobImage = blob;
      })
    })
  }

  save(){
    
    let data1 ={
      "file": {value:this.useBlobImage,type:"No",name:this.blobImageName}
    };
    if (this.useBlobImage) {
      data1["menu"] = { value: this.useBlobImage, name: this.blobImageName, type: "NO" }
    }
    this.auth.uploadPic(data1).subscribe((data:any)=> {
        console.log("pppp"+data);
    })
    // console.log(data1);
    
  }

  // async showActionSheet(photo,position){
  //     const actionSheet = await this.actionSheetController.create({
  //         header: 'Photos',
  //         buttons: [
  //           {
  //             text: 'Choose from gallery',
  //             handler: () => {
  //                 this.getImage();
  //             }
  //           },
  //           {
  //             text: 'Take Camera',
             
  //             handler: () => {
  //               this.photoService.takePicture();
  //             }
  //         }, {
  //           text: 'Cancel',
  //           icon: 'close',
  //           role: 'cancel',
  //           handler: () => {

  //           }
  //         }]
  //     });
  //     await actionSheet.present();
  // }
  ionViewWillEnter() {
    // this.menuCtrl.enable(false);
  }
  goBack(){
    this.navCtrl.back();
  }
}

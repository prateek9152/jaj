import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Config } from '../config/config';
import { AuthService } from '../services/auth.service';
import { ImageService } from '../services/image.service';

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
  gallaryImgPath: any = [];
  profilePicUrl: any = Config.profilePic;

  constructor(private menuCtrl:MenuController,private auth:AuthService, private navCtrl: NavController,private imageP:ImageService) { 
    this.formData = this.auth.getUserDetails();
  }


  ngOnInit() {
  }
  getImage(){
    this.imageP.getImage().then((res: any)=> {
      // this.formData.profile = res;
      this.blobImageName = this.imageP.generateImageName("hello.jpg");
      this.imageP.imgURItoBlob(res).then((blob: any) => {
        this.useBlobImage = blob;
      })
    })
  }
  save(){
    
    let data1 ={
      "id":{value:this.auth.getCurrentUserId(),type:"NO"},
      "file": {value:this.useBlobImage,type:"No",name:this.blobImageName}
    };
    this.auth.uploadPic(data1).subscribe((data:any)=> {
        console.log("pppp"+data);
    })
    // console.log(data1);
    
  }
  ionViewWillEnter() {
    // this.menuCtrl.enable(false);
  }
  goBack(){
    this.navCtrl.back();
  }
}

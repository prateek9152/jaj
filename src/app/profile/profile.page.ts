import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { ImageService } from '../image.service';

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

  constructor(private menuCtrl:MenuController, private navCtrl: NavController,private imageP:ImageService,public auth:AuthService) { 
    // this.formData = this.auth.getUserDetails();
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
      "profile": {value:this.useBlobImage,type:"No",name:this.blobImageName}
    };
    
    console.log(data1);
    
  }
  ionViewWillEnter() {
    // this.menuCtrl.enable(false);
  }
  goBack(){
    this.navCtrl.back();
  }
}

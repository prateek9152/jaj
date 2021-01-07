import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
userData = {
  name: "",
  email: "",
  message: ""
}
public alertPresented: any;
  constructor(private router:Router,
    private alertController:AlertController,private menuCtrl:MenuController) {
    this.menuCtrl.swipeGesture(false)
    this.alertPresented = false
   }

  ngOnInit() {
  }
  save(){
    // let data1 ={
    //   "name": {value:this.userData.name,type:"NO"},
    //   "email": {value:this.userData.email,type:"NO"},
    //   "message":{value:this.userData.message,type:"NO"}
    // }
    // this.auth.postData(data1,'contact_us').subscribe(
    //   async (response:any) =>{
    //      console.log(response)
    //      if(response.status==1){
    //        let vm = this
    //        if(!vm.alertPresented){
    //         vm.alertPresented = true;

    //        const alert = await this.alertController.create({
    //          cssClass: 'my-custom-class',
    //          header: 'Thank You',
    //         message: 'Your request has been submitted successfully.We will contact you soon.',
    //          buttons: [{
    //           text: 'OK',
    //           handler:() => {
    //             vm.alertPresented = false
    //           }
    //         }]
    //        });

    //        await alert.present();
    //       }
    //        //this.auth.updateUserDetails(response.data);
    //       this.router.navigate(['/menu/home']);
    //      }
    //      else{
    //        this.alertService.show('Alert',response.message);

    //      }
    //    } ,
    //    (error) =>{
    //      console.log(error)
    //      // const alert = await this.alertController.create({
    //      //   cssClass: 'my-custom-class',
    //      //   header: 'Alert',
    //      //  message: 'Login successfully.',
    //      //   buttons: ['OK']
    //      // });

    //      // await alert.present();
    //    }
    //  )

 }
  }
  // ionViewWillEnter() {
  //   this.menuCtrl.enable(false);
  // }


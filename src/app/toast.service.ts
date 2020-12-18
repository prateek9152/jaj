import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ToastService {
private myToast: any;
  constructor(private toast:ToastController) { }

showToast(){
  this.myToast = this.toast.create({
    position: 'bottom',
    cssClass: 'my-custom-class',
    buttons: [
      {
        side: 'start',
        icon: 'alert-circle-outline',
        text: 'Your Registration has been created successfully.',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  }).then((toastData) => {
    console.log(toastData);
    toastData.present();
  });
}
showLoginToast(){
  this.myToast = this.toast.create({
    position: 'bottom',
    cssClass: 'my-custom-class',
    buttons: [
      {
        side: 'start',
        icon: 'alert-circle-outline',
        text: 'Success Login Credentials.',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  }).then((toastData) => {
    console.log(toastData);
    toastData.present();
  });
}
requestToast() {
  this.myToast = this.toast.create({
    message: 'Thank You For Your Request.',
    duration: 2000
  }).then((toastData) => {
    console.log(toastData);
    toastData.present();
  });
}
}

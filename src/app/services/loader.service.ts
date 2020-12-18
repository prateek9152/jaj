import { Injectable } from '@angular/core';
import {LoadingController} from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public loadingController:LoadingController) { }

  showHideAutoLoader(){
    this.loadingController.create({
      message: 'This loader Will Auto Hide in 2 seconds',
      duration: 2000
    }).then((res)=> {
      res.present();
      res.onDidDismiss().then((dis)=> {
        console.log('Loading dismissed! after 2 seconds', dis);
        
      });
    });
  }
  showLoader(){
    this.loadingController.create({
      message: 'Please Wait....'
    }).then((res)=> {
      res.present();
    });
  }
  hideLoader(){
    this.loadingController.dismiss().then((res)=> {
      console.log('Loading dismissed!',res);
      
    }).catch((error)=> {
      console.log('error',error);
      
    })
  }
}

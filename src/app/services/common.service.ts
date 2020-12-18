import { Injectable } from '@angular/core';
import { AlertController,ToastController,LoadingController,ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private alertController: AlertController,
    public toastController:ToastController,
    public loadingController:LoadingController,
    public router:Router,
    public modalController:ModalController) { }

    isLoading = false;
    d:any;
    async presentAlert(title,msg,btns) {
      console.log(btns);
      let alert =await this.alertController.create({
        header: title,
        message: msg,
        buttons: btns
      });
       alert.present();
    }

    async presentToast(headerdata) {
      const toast = await this.toastController.create({
        header: headerdata,
        duration: 2000,
        position: 'bottom',
      });
      toast.present();
    }
  
    async presentLoader() {
      this.isLoading = true;
      return await this.loadingController.create({
        message: 'wait...',
      }).then(a => {
        a.present().then(() => {        
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
    }
  
    async dismissLoader() {
      this.isLoading = false;
      return await this.loadingController.dismiss().then(() => console.log('dismissed'));
    }

    // loggingout(){
    //   this.storage.get('userData').then((value) =>            
    //   this.settingsService.logout().subscribe((data: any) => {         
    //        this.storage.clear();  
    //        this.dismissLoader(); 
    //       this.router.navigateByUrl('/splash');
            
    //     }, err => {
    //       console.log('error msg!');
    //     })
    //   );
    // }

    dismissModal(dataArray=[]) {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalController.dismiss(dataArray);
     
    }
    async presentModal(path, classcss) {
      const modal = await this.modalController.create({
        component:path,
        cssClass: classcss

      });
     
      modal.onDidDismiss().then((d: any) => { 
        console.log(d);
        this.d = d;
      });
      
      return await modal.present();
    }
    
      
}

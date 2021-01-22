import { Component,HostListener,QueryList, ViewChildren,OnInit } from '@angular/core';

import { Platform,AlertController,IonRouterOutlet, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
// import { ConnectionStatus, NetworkService } from './services/network.service';
import { OfflineManagerService } from './services/offline-manager.service';
import { NetworkService } from './services/network.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})


export class AppComponent {

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet > ;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController:AlertController,
    private location: Location,
    private router:Router,
    private toastController:ToastController,
    private auth:AuthService,
    private offlineManager: OfflineManagerService,
   private networkService:NetworkService,
   private _location:Location 

  ) {

    this.initializeApp();
    // this.backButtonEvent();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(this.auth.isUserLoggedIn()){
          this.router.navigate(['/menu/home']);
      }
        else {
          this.router.navigate(['/menu/login']);
        }
    
        // this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
        //     if(status == ConnectionStatus.Online){
        //         this.offlineManager.checkForEvents().subscribe();
        //     }
        // })
        
            
        
      this.statusBar.styleDefault();
   
     this.splashScreen.hide();
    });
   this.platform.backButton.subscribeWithPriority(10,(processNextHandler) => {
        if(this._location.isCurrentPathEqualTo('/menu/home')){
              this.showExitConfirm();
              processNextHandler();
        } else {
            this._location.back();
        }
   });
   this.platform.backButton.subscribeWithPriority(5,() => {
        this.alertController.getTop().then(r => {
            if(r){
                navigator['app'].exitApp();
            }
            
        }).catch(e => {
                  console.log(e);
                  
        })
   }); 
  }
      showExitConfirm(){
        this.alertController.create({
              header: 'App Termination',
              message: 'Do you want to close the app',
              backdropDismiss: false,
              buttons: [{
                  text: 'Stay',
                  role: 'cancel',
                  handler: () => {
                      console.log('Application exit prevented');
                      
                  }
              }, {
                text: 'Exit',
                handler: () => {
                    navigator['app'].exitApp();
                }
              }]
        }).then(alert => {
            alert.present();
        })
      }  
//   backButtonEvent() {
//     this.platform.backButton.subscribe(async () => {

//       this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
//         if (outlet && outlet.canGoBack()) {
//           outlet.pop();

//         } else if (this.router.url === '/menu/home') {
//           if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
//             // this.platform.exitApp(); // Exit from app
//             navigator['app'].exitApp(); // work in ionic 4

//           } else {
//             const toast = await this.toastController.create({
//               message: 'Press back again to exit App.',
//               duration: 2000,
//               position: 'middle'
//             });
//             toast.present();
//             // console.log(JSON.stringify(toast));
//             this.lastTimeBackPress = new Date().getTime();
//           }
//         }
//       });
//     });
// }
}
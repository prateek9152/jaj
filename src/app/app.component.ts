import { Component,HostListener,QueryList, ViewChildren,OnInit } from '@angular/core';

import { Platform,AlertController,IonRouterOutlet, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

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
    private auth:AuthService
   

  ) {

    this.initializeApp();
    this.backButtonEvent();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(this.auth.isUserLoggedIn()){
          this.router.navigate(['/menu/home']);
      }
        else {
          this.router.navigate(['/menu/login']);
        }
      this.statusBar.styleDefault();
   
     this.splashScreen.hide();
    });
 
  }
  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {

      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();

        } else if (this.router.url === '/menu/home') {
          if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
            // this.platform.exitApp(); // Exit from app
            navigator['app'].exitApp(); // work in ionic 4

          } else {
            const toast = await this.toastController.create({
              message: 'Press back again to exit App.',
              duration: 2000,
              position: 'middle'
            });
            toast.present();
            // console.log(JSON.stringify(toast));
            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
    });
}
}
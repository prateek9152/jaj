import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import {SettingsService} from '../services/settings.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  @ViewChild('input',{static:false}) searchInput: { setFocus: () => void; } ;

  activePath = '';
formData:any;
  pages = [
    {
      name: 'Profile',
      path: '/menu/profile',
      icon: 'person'
    },
    {
      name: 'Notifications',
      path: '/menu/notifications',
      icon: 'notifications'
    },
    // {
    //   name: 'Mail',
    //   path: '/menu/home',
    //   icon: 'mail'
    // },
    // {
    //   name: 'Wallet',
    //   path: '/menu/contact',
    //   icon: 'wallet'
    // },
    {
      name: 'Settings',
      path: '/menu/settings',
      icon: 'settings'
    },
    
  ]

  constructor(private router: Router,public auth:AuthService,private alertController:AlertController,
    private settingsService:SettingsService,private commonService:CommonService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url
    })
  }

  ngOnInit() {
    
  }
  toggle(){}
  more(){
    this.searchInput.setFocus();

  }
  async logout(){
    const alert = await this.alertController.create({
      header: 'Alert!',
      message: 'Do you want to log out??',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            // this.commonService.loggingout();
              this.auth.removeAllSessions();


               this.router.navigate(['/menu/login']);
          }
        }
      ]
    });

    await alert.present();
    // this.alertP.confirmationAlert('Alert!', 'Do you want to log out?').then((res) => {
    //   if (res == 'yes') {
    //     this.auth.removeAllSessions();
    //     this.router.navigate(['/menu/login']);
    //     // this.events.publish('notiUnreadCount');
    //   }
    // });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  activePath = '';

  pages = [
    {
      name: 'Profile',
      path: '/menu/profile',
      icon: 'person'
    },
    {
      name: 'Notifications',
      path: '/menu/register',
      icon: 'notifications'
    },
    {
      name: 'Mail',
      path: '/menu/home',
      icon: 'mail'
    },
    {
      name: 'Wallet',
      path: '/menu/contact',
      icon: 'wallet'
    },
    {
      name: 'Settings',
      path: '/menu/settings',
      icon: 'settings'
    },
    {
      name: 'Logout',
      path: '/menu/login',
      icon: 'log-out'
    }
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url
    })
  }

  ngOnInit() {
  }
  toggle(){}
  more(){}

}

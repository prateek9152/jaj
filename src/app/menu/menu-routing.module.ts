import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule',
      },
      {
        path: 'profile',
        loadChildren: '../profile/profile.module#ProfilePageModule'
      },
     
      
     
      {
        path: 'signup',
        loadChildren: () => import('../auth/signup/signup.module').then( m => m.SignupPageModule)
      },
      
      {
        path: 'login',
        loadChildren: () => import('../auth/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'verify',
        loadChildren: () => import('../auth/verify/verify.module').then( m => m.VerifyPageModule)
      },
     {
      path: 'forgot',
      loadChildren: () => import('../auth/forgot/forgot.module').then( m => m.ForgotPageModule)
     },
     {
      path: 'settings',
      loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
    },
    {
      path: 'forgotverify',
      loadChildren: () => import('../auth/forgotverify/forgotverify.module').then( m => m.ForgotverifyPageModule)
    },
    {
      path:'chatdetails/:receiver/:room/:type',
      loadChildren:() => import('../chatdetails/chatdetails.module').then(m => m.ChatdetailsPageModule)
    },
    {
      path:'mycontact',
      loadChildren:() => import('../chatdetails/mycontact/mycontact.module').then(m => m.MycontactPageModule)
    },
   
   
   {
      path: 'contact',
      loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
    },
    {
      path: 'demo',
      loadChildren: () => import('../demo/demo.module').then( m => m.DemoPageModule)
    },
     ]
  },
  {
    path: '',
    redirectTo: '/menu/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}

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
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'profile',
        loadChildren: '../profile/profile.module#ProfilePageModule'
      },
     
      
     
      {
        path: 'signup',
        loadChildren: () => import('../signup/signup.module').then( m => m.SignupPageModule)
      },
      
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'verify',
        loadChildren: () => import('../verify/verify.module').then( m => m.VerifyPageModule)
      },
     {
      path: 'forgot',
      loadChildren: () => import('../forgot/forgot.module').then( m => m.ForgotPageModule)
     },
     {
      path: 'settings',
      loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
    },
    {
      path: 'forgotverify',
      loadChildren: () => import('../forgotverify/forgotverify.module').then( m => m.ForgotverifyPageModule)
    },
    {
      path:'chatdetails',
      loadChildren:() => import('../chatdetails/chatdetails.module').then(m => m.ChatdetailsPageModule)
    },
    {
      path:'mycontact',
      loadChildren:() => import('../mycontact/mycontact.module').then(m => m.MycontactPageModule)
    },
    {
      path:'addgroup',
      loadChildren:() => import('../addgroup/addgroup.module').then(m => m.AddgroupPageModule)
    },
    {
      path:'addcircle',
      loadChildren:() => import('../addcircle/addcircle.module').then(m => m.AddcirclePageModule)
    },
    {
      path: 'terms',
      loadChildren: () => import('../terms/terms.module').then( m => m.TermsPageModule)
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

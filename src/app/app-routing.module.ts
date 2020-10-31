import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './menu/menu.module#MenuPageModule'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./groups/groups.module').then( m => m.GroupsPageModule)
  },
  {
    path: 'circle',
    loadChildren: () => import('./circle/circle.module').then( m => m.CirclePageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'forgotverify',
    loadChildren: () => import('./forgotverify/forgotverify.module').then( m => m.ForgotverifyPageModule)
  },
  {
    path: 'chatdetails',
    loadChildren: () => import('./chatdetails/chatdetails.module').then( m => m.ChatdetailsPageModule)
  },
  {
    path: 'mycontact',
    loadChildren: () => import('./mycontact/mycontact.module').then( m => m.MycontactPageModule)
  },
  {
    path: 'addgroup',
    loadChildren: () => import('./addgroup/addgroup.module').then( m => m.AddgroupPageModule)
  },
  {
    path: 'addcircle',
    loadChildren: () => import('./addcircle/addcircle.module').then( m => m.AddcirclePageModule)
  }
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'forgot',
  //   loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  // },
  // {
  //   path: 'verify',
  //   loadChildren: () => import('./verify/verify.module').then( m => m.VerifyPageModule)
  // },
  // {
  //   path: 'edit-profile',
  //   loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  // },
  // {
  //   path: 'menu',
  //   loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

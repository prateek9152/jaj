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
  },
  
  
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

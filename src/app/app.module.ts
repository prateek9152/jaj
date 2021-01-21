import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { IonicStorageModule } from '@ionic/storage';
import {ComponentModule} from './components.modules';
import {Camera} from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { Contacts } from '@ionic-native/contacts/ngx';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Network } from '@ionic-native/network/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {AuthGuardService} from './services/auth-guard.service';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
const config: SocketIoConfig = { url: 'https://ionicinto.wdipl.com:9902/', options: {secure: true}, };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    ComponentModule,
    IonicStorageModule.forRoot(),
    SocketIoModule.forRoot(config),
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Camera,Contacts,Network,
    NativeStorage,
    File,
    WebView,
    AuthGuardService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}

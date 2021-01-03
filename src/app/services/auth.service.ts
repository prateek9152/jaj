import { Injectable } from '@angular/core';
import { HttpClient ,  HttpParams,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import {User} from '../../user.model';  
// import { Config } from ".././app/config/config";
import { Router } from "@angular/router";
import { ToastController, Platform } from '@ionic/angular';
import { CommonService } from './common.service';
import { HttpErrorHandlerService , HandleError } from "./http-error-handler.service";
export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user = new BehaviorSubject<User>(null);
  authState = new BehaviorSubject(false);
  localStorageUserKey = "JAJSESSION";
  localStorageUserTypeKey = "JAJSESSION";
  // localStorageNotiCount="DRIVERNOTICOUNT";
  onUserDetailChanged: BehaviorSubject<any> = new BehaviorSubject(null);

  localStorageNotiData = "JAJNOTIDATA";
  private handleError : HandleError

  constructor(
    private http :HttpClient,
    httpErrorHandler:HttpErrorHandlerService,
    private router:Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController,
    private commonService:CommonService 
    ) {
      this.platform.ready().then(() => {
        this.ifLoggedIn();
      });
      this.handleError= httpErrorHandler.createHandleError('TasksService') 
    

  }
  ifLoggedIn() {
    const dataPromise = this.storage.get('userToken');
      dataPromise.then(data => {
        let retdata = data;         
         if (retdata !== null) {          
          return true;
        }
      });
  }
  generateFormData(data: any) {
    let input = new FormData();
    for (let key in data) {
      if (key !== "confirmP" && key !== "terms") {
        if (data[key].name && data[key].value) {
          input.append(key, data[key].value, data[key].name);
        } else {
          input.append(key, data[key].value);
        }
      }
    }
    return input;
  }
  getUserDetails() {
    let user = JSON.parse(localStorage.getItem(this.localStorageUserKey));
    return user.userDetails;
  }
  getCurrentUserId() {
    let user = JSON.parse(localStorage.getItem(this.localStorageUserKey));
    return user.userDetails.id;
  }
  updateUserDetails(details: any) {
    console.log(details);
    
    console.log(this.localStorageUserKey,details);
    let session = JSON.parse(localStorage.getItem(this.localStorageUserKey));

    if (session) {
      session.userDetails = details;
    }
    else {
      session = {
        "userDetails": details,
        "language": "en"
      }
    }
    localStorage.setItem(this.localStorageUserKey, JSON.stringify(session));

    //this.onUserDetailChanged.next(details);

  }

  removeUserDetails() {
    let session = JSON.parse(localStorage.getItem(this.localStorageUserKey));
    delete session["userDetails"];
    localStorage.setItem(this.localStorageUserKey, JSON.stringify(session));
  }

  removeAllSessions() {
    localStorage.removeItem(this.localStorageUserKey);
  }

  isUserLoggedIn() {
    let user = JSON.parse(localStorage.getItem(this.localStorageUserKey));
    if (user) {
      if (user.userDetails) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  getUrlFromData(data: any) {

    let params = new HttpParams();

    for (let key in data) {
      params = params.append(key, data[key]);
    }
    return params;
  }

  addUser(data: any): Observable<any> {
    this.generateFormData(data);
    return this.http.post<any>('https://ionicinto.wdipl.com/mychat/api/register', data).pipe(catchError(this.handleError('addTask', data)));
  }  
  userLogin(data:any) : Observable<any>{
    this.generateFormData(data);
    return this.http.post<any>('https://ionicinto.wdipl.com/mychat/api/login',data).pipe(catchError(this.handleError('userLogin',data)))

    // let formdata = this.generateFormData(data);
    // return this.http.post<any>('https://ionicinto.wdipl.com/mychat/api/login',formdata).pipe(catchError(this.handleError('userLogin',formdata)))
  }  
  post(data: any,url:any): Observable<any>{
    let params = this.getUrlFromData(data);

    return this.http.post<any>('https://ionicinto.wdipl.com/mychat/api/'+url,{params:params});
  }
  logout():Observable<any>{
    this.removeAllSessions();
    return this.http.post<any>('https://ionicinto.wdipl.com/mychat/api/logout','');
  }
  async autoLogin()   {
    const data =localStorage.getItem('userToken');
    var userData:any =localStorage.getItem('userData');
    userData =  JSON.parse(userData); 
      if(userData)
      {
        this.commonService.setUserData(userData);
        if(userData.user_type == 1)  
          {
            this.router.navigate(["/menu/home"]); 
          }
      }  
  }
}

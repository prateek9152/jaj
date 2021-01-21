import { Injectable } from '@angular/core';
import { HttpClient ,  HttpParams,HttpHeaders } from "@angular/common/http";
import { Observable,BehaviorSubject } from "rxjs";
import { catchError } from "rxjs/operators";

// import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import {User} from '../../user.model';  
import { Config } from ".././config/config";
import { Router } from "@angular/router";
import { ToastController, Platform } from '@ionic/angular';
import { CommonService } from './common.service';
import { HttpErrorHandlerService , HandleError } from "./http-error-handler.service";
import { map } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
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
  loginDetails : any;
  userloginDetails:any;
  token:any;
  options:any;
  headers:any;
  isLoggedIn = false;
  // localStorageNotiCount="DRIVERNOTICOUNT";
  onUserDetailChanged: BehaviorSubject<any> = new BehaviorSubject(null);

  localStorageNotiData = "JAJNOTIDATA";
  private handleError : HandleError
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(
    private http :HttpClient,
    httpErrorHandler:HttpErrorHandlerService,
    private router:Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController,
    private commonService:CommonService,
    private nativeStorage: NativeStorage 
    ) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
      this.platform.ready().then(() => {
        this.ifLoggedIn();
      });
      this.handleError= httpErrorHandler.createHandleError('TasksService') 
  }
  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }
  ifLoggedIn() {
    const dataPromise = this.storage.get('token');
      dataPromise.then(data => {
        let retdata = data;         
         if (retdata !== null) {          
          return true;
        }
      });
      const user = this.storage.get('userData');
      user.then(result => {
          let retdata = result;
          if(retdata !== null){
            return true;
          }
      })
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
    this.nativeStorage.getItem('user');
    
        return JSON.parse(localStorage.getItem('userData'));
   
      
  }
  getCurrentUserId() {
    this.loginDetails = JSON.parse(localStorage.getItem('userData'));
    console.log("mobilewebid");
    
    return this.loginDetails.id;
    
    
      
  }
  
  
  updateUserDetails(details: any) {  
    
      console.log('desktop');
      
    localStorage.setItem('token', JSON.stringify(details.success.token));
    localStorage.setItem('userData', JSON.stringify(details.success.data)); 
    
                          // Native Storage 
     this.nativeStorage.setItem('toekn', JSON.stringify(details.success.token)).then(
      () => {console.log('Stored Token!'),error => console.error('Error storing item',error);})
    this.nativeStorage.setItem('user', JSON.stringify(details.success.data)).then(
      () => {console.log('Stored Item!'),error => console.error('Error storing item',error);})
  
  }
  getNativeCurrentUserId(){
    this.userloginDetails = this.nativeStorage.getItem('user');
    return this.userloginDetails.id;
  }
  removeUserDetails() {
    localStorage.removeItem('userData');
  }

  removeAllSessions() {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem(this.localStorageUserKey);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userToken');

  }

  isUserLoggedIn() {

    this.loginDetails = JSON.parse(localStorage.getItem('userData'));
    if(this.loginDetails){
        return true;
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
  getApiHeaders(extraHeader = {}, checkAuth = false){
      if(checkAuth){
        this.headers = new HttpHeaders({
          'Content-Type': 'application/json',
          "Authorization": 'Bearer ' +JSON.parse(localStorage.getItem('token'))});

      }
      return this.options = {headers: this.headers};
  }
  // signup(user){
  //   return this.http.post('https://ionicinto.wdipl.com/mychat/api/register',user);
  // }
  addUser(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl +'/api/register', data).pipe(catchError(this.handleError('addTask', data)));
  }  
  login(emailOrPrimaryMobile,password){
    return this.http.post<any>(Config.ApiUrl +'/api/login',{emailOrPrimaryMobile,password}).pipe(map(user => {
        // user.authdata = window.btoa(emailOrPrimaryMobile + ':' +password);
        localStorage.setItem('currentUser',JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.authState.next(true);
        return user;
    }))
  }
  
    logout():Observable<any>{
    this.removeAllSessions();
    this.authState.next(false);
    return this.http.post<any>(Config.ApiUrl +'/api/logout','');
  }
  
  uploadPic(formData){
    return this.http.post<any>( Config.ApiUrl +'/api/upload_profile_picture',formData,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('uploadPic',formData)));
  }

  chatUserList(): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'/api/chat_user_list',null,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('chatUserList',null)));

  }

  setLoggedIn(_value){
      this.isLoggedIn = _value;
  }
  isAuthenticated(){
      return this.authState.value;
  }
}
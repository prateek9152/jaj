import { Injectable } from '@angular/core';
import { HttpClient ,  HttpParams,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import {User} from '../../user.model';  
import { Config } from ".././config/config";
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
  loginDetails : any;
  token:any;
  options:any;
  headers:any;
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
    private commonService:CommonService 
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
    return JSON.parse(localStorage.getItem('userData'));
  }
  getCurrentUserId() {
    this.loginDetails = JSON.parse(localStorage.getItem('userData'));
    return this.loginDetails.id;
  }
  updateUserDetails(details: any) {    
    localStorage.setItem('token', JSON.stringify(details.success.token));
    localStorage.setItem('userData', JSON.stringify(details.success.data));    
  }

  removeUserDetails() {
    localStorage.removeItem('userData');
  }

  removeAllSessions() {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
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
        this.token = localStorage.getItem('token');
        this.headers = new HttpHeaders({"Authorization": "Bearer" + this.token});

      }
      return this.options = {headers: this.headers};
  }

  addUser(data: any): Observable<any> {
    this.generateFormData(data);
    return this.http.post<any>('https://ionicinto.wdipl.com/mychat/api/register', data).pipe(catchError(this.handleError('addTask', data)));
  }  
  userLogin(data:any) : Observable<any>{
    
    let headers = new HttpHeaders({ "Accept": "application/json" });
    
    return this.http.post<any>('https://ionicinto.wdipl.com/mychat/api/login',data,{headers:headers}).pipe(catchError(this.handleError('userLogin',data)))

    // let formdata = this.generateFormData(data);
    // return this.http.post<any>('https://ionicinto.wdipl.com/mychat/api/login',formdata).pipe(catchError(this.handleError('userLogin',formdata)))
  }  
  // post(data: any,url:any): Observable<any>{
  //   let params = this.getUrlFromData(data);

  //   return this.http.post<any>('https://ionicinto.wdipl.com/mychat/api/'+url,{params:params});
  // }
  logout():Observable<any>{
    this.removeAllSessions();
    return this.http.post<any>('https://ionicinto.wdipl.com/mychat/api/logout','');
  }
  // async autoLogin()   {
  //   const data =localStorage.getItem('userToken');
  //   var userData:any =localStorage.getItem('userData');
  //   userData =  JSON.parse(userData); 
  //     if(userData)
  //     {
  //       this.commonService.setUserData(userData);
  //       if(userData.user_type == 1)  
  //         {
  //           this.router.navigate(["/menu/home"]); 
  //         }
  //     }  
  // }

  uploadPic(formData){
    return this.http.post<any>( 'https://ionicinto.wdipl.com/mychat/api/upload_profile_picture',formData,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('uploadPic',formData)));
  }

 
}
import { Injectable } from '@angular/core';
import { HttpClient ,  HttpParams,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  localStorageUserKey = "JAJOJSESSION";
  localStorageUserTypeKey = "JAJOJSESSION";
  // localStorageNotiCount="DRIVERNOTICOUNT";
  onUserDetailChanged: BehaviorSubject<any> = new BehaviorSubject(null);

  localStorageNotiData = "JAJOJNOTIDATA";
  constructor(private http: HttpClient,
    ) {

      //this.handleError= httpErrorHandler.createHandleError('TasksService')
  }
  generateFormData(data: any) {
    let input = new FormData();
    for (let key in data) {
      if (key !== "confirmPassword" && key !== "terms") {
        if (data[key].firstname && data[key].value) {
          input.append(key, data[key].value, data[key].firstname);
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
 
}

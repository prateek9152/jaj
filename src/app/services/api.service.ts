import { Injectable } from '@angular/core';
import {NetworkService} from './network.service';
import {Storage} from '@ionic/storage';
import {Observable,from,throwError} from 'rxjs';
import {tap,map,catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {OfflineManagerService} from './offline-manager.service';
const API_STORAGE_KEY = 'specialkey';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private networkService:NetworkService, private http:HttpClient,private storage:Storage,
    private offlineManager:OfflineManagerService) { }

    // getData(forceRefresh: boolean = false): Observable<any[]>{
    //   if(this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline || forceRefresh){
    //     return from(this.getLocalData('user'));
    //             }
    //   else {
    //     return this.http.get<any[]>('').pipe(tap(res => {
    //       this.setLocalData('',res);
    //     }), catchError((x,caught)=> {
    //         return throwError(x);
    //     }), );
    //   }
    // }
    // addData(data):Observable<any>{
    //   const url = 'https://ionicinto.wdipl.com/mychat/api/details';
    //   if(this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline){
    //     return from(this.offlineManager.storeRequest(url,'POST',data));
    //   }
    //   else {
    //     return this.http.post(url,data).pipe(catchError(err => {this.offlineManager.storeRequest(url,'POST',data);
    //       throw new Error(err);
    //     }
    //     ))
    //   }
    // }
    private setLocalData(key,data){
        this.storage.ready().then(() => {
            this.storage.set(`${API_STORAGE_KEY}--${key}`,data);
            
        });
    }
    private getLocalData(key){
        return this.storage.get(`${API_STORAGE_KEY}--${key}`);
    }
  }

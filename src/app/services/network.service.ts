import { Injectable } from '@angular/core';
import {Network} from '@ionic-native/network/ngx';
import {BehaviorSubject,Observable} from 'rxjs';
import {ToastController,Platform} from '@ionic/angular';
export enum ConnectionStatus {
  Online,
  Offline

}
@Injectable({
  providedIn: 'root'
})

 
export class NetworkService {
  private status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(ConnectionStatus.Offline);
  constructor(private network:Network,private toastController:ToastController,private plt:Platform) {
      this.plt.ready().then(() => {
          this.initializeNetworkEvents();
          let status = this.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;
          this.status.next(status);
      });

   }
   public initializeNetworkEvents(){
      this.network.onDisconnect().subscribe(() => {
            if(this.status.getValue() === ConnectionStatus.Online){
                console.log('We are offline');
                this.updateNetworkStatus(ConnectionStatus.Offline);
            }
      });
   }
    private async updateNetworkStatus(status: ConnectionStatus){
          this.status.next(status);
          let connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
          let toast = this.toastController.create({
              message: 'You are now ${Connection}',
              duration: 1500,
              position: 'bottom',
              mode: 'md',
              translucent: true
          });
          toast.then(toast => toast.present());
    }
      public onNetworkChange(): Observable<ConnectionStatus>{
          return this.status.asObservable();
      }
      public  getCurrentNetworkStatus():ConnectionStatus {
          return this.status.getValue();
      }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController,NavController,MenuController } from '@ionic/angular';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-chatdetails',
  templateUrl: './chatdetails.page.html',
  styleUrls: ['./chatdetails.page.scss'],
})
export class ChatdetailsPage implements OnInit {

  constructor(public popoverController:PopoverController,public navCtrl:NavController,public menuCtrl:MenuController,private router:Router) { }

  ngOnInit() {
  }
  async presentPopover(ev: any){
    const popover = await this.popoverController.create({
      component: DropdownComponent,
      event:ev,
      translucent: true
    });
    return await popover.present();
  }
  ionViewWillEnter(){
    // this.menuCtrl.enable(false);
  }
  video(){}
  audio(){}
  goBack(){
    this.router.navigate(['/menu/home']);
  }

}

import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['./../app.component.scss','home.page.scss'],
})
export class HomePage implements OnInit {
  type: string;
  public show:boolean = false;
  public buttonName:any = 'Show';
  weather = 'sunny';

  constructor(private router:Router) {}
  ngOnInit(){
    this.type = 'chat';
  }
  toggle(){
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
details(){}
chatdetail(){
  this.router.navigate(['/menu/chatdetails']);
}
filter() {
}
mycontact(){
  this.router.navigate(['/menu/mycontact']);
}
addgroup(){
  this.router.navigate(['/menu/addgroup']);
}
addcir(){
  this.router.navigate(['/menu/addcircle']);
}
circle(){
}
contactinfo(){
}
video(){
}
audio(){
}
report(){}
segmentChanged(ev: any) {
  console.log('Segment changed', ev);
}
add(){}
}

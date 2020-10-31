import { Component, OnInit,ViewChild } from '@angular/core';
import{Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {
  @ViewChild('one') one;
  @ViewChild('two') two;
  @ViewChild('three') three;
  @ViewChild('four') four;
  @ViewChild('five') five;
  @ViewChild('six') six;
  constructor(private router:Router,private menuCtrl:MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  onKeyUp(ev, id) {
    console.log(ev);
    if (ev != 8) {
      if (id == 'one') {
        this.two.setFocus();
      } else if (id == 'two') {
        this.three.setFocus();
      } else if (id == 'three') {
        this.four.setFocus();
      } else if (id == 'four') {
        this.five.setFocus();
      } else if (id == 'five') {
        this.six.setFocus();
      }
    } else {
      if (id == 'two') {
        this.one.setFocus();
      } else if (id == 'three') {
        this.two.setFocus();
      } else if (id == 'four') {
        this.three.setFocus();
      } else if (id == 'five') {
        this.four.setFocus();
      } else if (id == 'six') {
        this.five.setFocus();
      }
    }

  }
  verify(){
    this.router.navigate(['/menu/home']);
  }
  resend(){}
  pp(){}
}

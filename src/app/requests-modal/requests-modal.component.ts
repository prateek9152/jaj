import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-requests-modal',
  templateUrl: './requests-modal.component.html',
  styleUrls: ['./requests-modal.component.scss'],
})
export class RequestsModalComponent implements OnInit {
  requestList : any ;
  constructor(
    private router:Router,
    private commonService:CommonService
) { }

  ngOnInit() {
  }
  closeModal() {
    this.commonService.dismissModal();
  }
  
  navigate(){
    this.closeModal();
    this.router.navigate(['/menu/home']);
  }
}

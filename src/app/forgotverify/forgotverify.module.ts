import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotverifyPageRoutingModule } from './forgotverify-routing.module';

import { ForgotverifyPage } from './forgotverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotverifyPageRoutingModule
  ],
  declarations: [ForgotverifyPage]
})
export class ForgotverifyPageModule {}

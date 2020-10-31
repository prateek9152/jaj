import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcirclePageRoutingModule } from './addcircle-routing.module';

import { AddcirclePage } from './addcircle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcirclePageRoutingModule
  ],
  declarations: [AddcirclePage]
})
export class AddcirclePageModule {}

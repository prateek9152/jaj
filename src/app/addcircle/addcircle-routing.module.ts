import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcirclePage } from './addcircle.page';

const routes: Routes = [
  {
    path: '',
    component: AddcirclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcirclePageRoutingModule {}

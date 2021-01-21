import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotverifyPage } from './forgotverify.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotverifyPageRoutingModule {}

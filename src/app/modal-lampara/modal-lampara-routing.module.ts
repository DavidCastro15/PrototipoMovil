import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalLamparaPage } from './modal-lampara.page';

const routes: Routes = [
  {
    path: '',
    component: ModalLamparaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalLamparaPageRoutingModule {}

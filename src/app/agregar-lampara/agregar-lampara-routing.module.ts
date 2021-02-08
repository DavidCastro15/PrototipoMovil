import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarLamparaPage } from './agregar-lampara.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarLamparaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarLamparaPageRoutingModule {}

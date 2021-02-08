import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfUsuarioPage } from './conf-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ConfUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfUsuarioPageRoutingModule {}

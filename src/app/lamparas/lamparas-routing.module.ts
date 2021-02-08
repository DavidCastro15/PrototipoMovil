import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LamparasPage } from './lamparas.page';

const routes: Routes = [
  {
    path: '',
    component: LamparasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LamparasPageRoutingModule {}

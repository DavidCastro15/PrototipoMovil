import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasesPage } from './bases.page';

const routes: Routes = [
  {
    path: '',
    component: BasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasesPageRoutingModule {}

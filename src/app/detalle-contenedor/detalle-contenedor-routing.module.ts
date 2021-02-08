import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleContenedorPage } from './detalle-contenedor.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleContenedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleContenedorPageRoutingModule {}

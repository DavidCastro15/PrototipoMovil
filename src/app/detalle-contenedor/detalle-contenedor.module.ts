import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleContenedorPageRoutingModule } from './detalle-contenedor-routing.module';

import { DetalleContenedorPage } from './detalle-contenedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleContenedorPageRoutingModule
  ],
  declarations: [DetalleContenedorPage]
})
export class DetalleContenedorPageModule {}

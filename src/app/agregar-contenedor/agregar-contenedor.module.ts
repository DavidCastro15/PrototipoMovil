import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarContenedorPageRoutingModule } from './agregar-contenedor-routing.module';

import { AgregarContenedorPage } from './agregar-contenedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarContenedorPageRoutingModule
  ],
  declarations: [AgregarContenedorPage]
})
export class AgregarContenedorPageModule {}

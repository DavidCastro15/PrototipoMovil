import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalLamparaPageRoutingModule } from './modal-lampara-routing.module';

import { ModalLamparaPage } from './modal-lampara.page';
import {DetalleContenedorPage} from '../detalle-contenedor/detalle-contenedor.page';
import {DetalleContenedorPageModule} from '../detalle-contenedor/detalle-contenedor.module';

@NgModule({
  entryComponents:[
    DetalleContenedorPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalLamparaPageRoutingModule,
    DetalleContenedorPageModule
  ],
  declarations: [ModalLamparaPage]
})
export class ModalLamparaPageModule {}

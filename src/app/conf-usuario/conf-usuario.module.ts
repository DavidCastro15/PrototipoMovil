import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfUsuarioPageRoutingModule } from './conf-usuario-routing.module';

import { ConfUsuarioPage } from './conf-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfUsuarioPageRoutingModule
  ],
  declarations: [ConfUsuarioPage]
})
export class ConfUsuarioPageModule {}

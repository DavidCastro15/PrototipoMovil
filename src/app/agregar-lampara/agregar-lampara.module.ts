import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarLamparaPageRoutingModule } from './agregar-lampara-routing.module';

import { AgregarLamparaPage } from './agregar-lampara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarLamparaPageRoutingModule
  ],
  declarations: [AgregarLamparaPage]
})
export class AgregarLamparaPageModule {}

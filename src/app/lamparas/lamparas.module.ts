import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LamparasPageRoutingModule } from './lamparas-routing.module';

import { LamparasPage } from './lamparas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LamparasPageRoutingModule
  ],
  declarations: [LamparasPage]
})
export class LamparasPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstalacionesPageRoutingModule } from './instalaciones-routing.module';

import { InstalacionesPage } from './instalaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstalacionesPageRoutingModule
  ],
  declarations: [InstalacionesPage]
})
export class InstalacionesPageModule {}

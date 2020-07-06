import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstalacionesPage } from './instalaciones.page';

const routes: Routes = [
  {
    path: '',
    component: InstalacionesPage
  },
  {
    path: ':edificioID',
    loadChildren: () => import('./descripcion/descripcion.module').then( m => m.DescripcionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstalacionesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'places',
    children: [
      {
        path: '',
        loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule),
      },
      {
        path: ':placeId',
        children:[
          {
            path: '',
            loadChildren: () => import('./places/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule),

          },
          {
            path:':instalacionId',
            children:[
              {
                path: '',
                loadChildren: () => import('./places/place-detail/instalaciones/instalaciones.module').then(m => m.InstalacionesPageModule),
              },
              {
                path:'descripId',
                loadChildren: () => import('./places/place-detail/instalaciones/descripcion/descripcion.module').then(m => m.DescripcionPageModule)
              }
            ] 
          }
        ]
      }

      ]

  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

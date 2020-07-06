import { Injectable } from '@angular/core';
import {Place} from "./place.model";
@Injectable({
  providedIn: 'root'
})
export class PlacesService  {
  private lugares: Place [] =[
    {
      id: '1',
      titulo: 'Facultades',
      imagenURL: 'business'

    },
    {
      id: '2',
      titulo: 'Bibliotecas',
      imagenURL: 'library'
    },
    {
      id: '3',
      titulo: 'Comedores',
      imagenURL: 'fast-food'
    },
    {
      id: '4',
      titulo: 'Areas deportivas',
      imagenURL: 'body'
    },
    {
      id: '5',
      titulo: 'Areas administrativas',
      imagenURL: 'file-tray-stacked'
    }
    ];
  constructor() { }

  obtenerlugares(){
    return [...this.lugares]
  }

  obtenerlugar(placeid: string){
    return {
      ...this.lugares.find( lugar => {
        return lugar.id === placeid;
      })
    }
  }

}
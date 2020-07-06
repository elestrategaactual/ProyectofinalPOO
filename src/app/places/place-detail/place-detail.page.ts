import { Place } from './../place.model';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  public facultades: Place[] = [
  {
    id: '1',
    titulo: 'Facultad de Ingenieria',
    imagenURL: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/National_University_of_Colombia%2C_School_of_Engineering.jpg'
  },
  {
    id: '2',
    titulo: 'Facultad de Medicina ',
    imagenURL: 'https://cdn-0.mapio.net/images-p/10978828.jpg'
  },
  {
    id: '3',
    titulo: 'Facultad C. Politicas y Derecho',
    imagenURL: 'http://sga.unal.edu.co/wp-content/uploads/2019/01/fachada_home.jpg'
  },
  {
    id: '4',
    titulo: 'Facultad Artes',
    imagenURL: 'http://investigacion.bogota.unal.edu.co/fileadmin/recursos/direcciones/extension_bogota/img/fotos_campus/sindu_artes.jpg' 
  },
  {
    id: '5',
    titulo: 'Facultad C. Humanas',
    imagenURL: 'http://www.humanas.unal.edu.co/2017/unidades-academicas/departamentos/psicologia/application/files/8215/6537/8239/EDICION_FOTO_PAGINA.jpg'
  },
{
    id: '6',
    titulo: 'Facultad C. Agrarias',
    imagenURL: 'http://investigacion.bogota.unal.edu.co/fileadmin/recursos/direcciones/extension_bogota/img/fotos_campus/facultad_agrarias.jpg'
  },
{
    id: '7',
    titulo: 'Facultad C. Economicas',
    imagenURL: 'https://images.adsttc.com/media/images/54d5/2212/e58e/ce14/7000/002d/slideshow/Edificio_de_Economia.jpg'
  },
{
    id: '8',
    titulo: 'Facultad Ciencias',
    imagenURL: 'http://investigacion.bogota.unal.edu.co/fileadmin/recursos/direcciones/extension_bogota/img/fotos_campus/facultad_ciencias.jpg'
  },
{
    id: '9',
    titulo: 'Facultad Odontologia',
    imagenURL: 'http://investigacion.bogota.unal.edu.co/fileadmin/recursos/direcciones/extension_bogota/img/fotos_campus/facultad_odontologia.png'
  },
{
    id: '10',
    titulo: 'Facultad Enfermeria',
    imagenURL: 'https://images.adsttc.com/media/images/586d/5653/e58e/ce5c/b800/0002/slideshow/Actividad.jpg'
  },
{
    id: '11',
    titulo: 'Facultad M. veterinaria y zootecnia',
    imagenURL: 'http://medicinaveterinariaydezootecnia.bogota.unal.edu.co/fileadmin/user_upload/Patologia_Veterinaria_LPV.jpg'
  }
  ]
  
  lugar: Place;
  
  constructor( private activatedRoute: ActivatedRoute , private placesService: PlacesService) {
    
  } 

  ngOnInit() { 
    this.activatedRoute.paramMap.subscribe(paraMap => {
      const NumId = paraMap.get('placeId')
      this.lugar = this.placesService.obtenerlugar(NumId)
    }
    )
  }

}

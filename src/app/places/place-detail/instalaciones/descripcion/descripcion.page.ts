import { InstalacionesService } from './../instalaciones.service';
import { Sitios } from './../../../place.model';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.page.html',
  styleUrls: ['./descripcion.page.scss'],
})
export class DescripcionPage implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private instalacionesService: InstalacionesService) { }
  descrip: Sitios;
  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paraMap => {
      const intId = paraMap.get('edificioID');
      this.descrip = this.instalacionesService.edificacion (intId);    
    });
  }

}

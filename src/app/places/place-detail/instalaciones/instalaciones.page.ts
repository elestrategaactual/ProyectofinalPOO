import { InstalacionesService } from './instalaciones.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.page.html',
  styleUrls: ['./instalaciones.page.scss'],
})
export class InstalacionesPage implements OnInit {

edificios = []

  constructor(private instalacionesService: InstalacionesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.edificios = this.instalacionesService.edificaciones ();
   }
}

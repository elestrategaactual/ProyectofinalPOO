import { Component, OnInit } from '@angular/core';
import {PlacesService} from "./places.service";

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  lugares =[]

  constructor(private placeService: PlacesService) { }


  ngOnInit() {
    this.lugares = this.placeService.obtenerlugares();
  }
}

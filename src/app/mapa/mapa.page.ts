
import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
declare var google: any;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
// clase para el mapa
export class MapaPage  {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  markers: any = [
    {
			"id":"401",
			"Nombre":"Edificio Facultad de ingenieria/El viejo",
			"Categoria":"Academica clases",
			"Facultad":"Ingenieria",
			"Latitud":"4.637329",
			"Longitud":"-74.082777",
			"imagenURL":"",
			"Historia":"Finalizada su construccion en 1943, es tambien llamado como Edificio insignia Julio Garavito Armero, fue diseño por los arquitectos Lepoldo Roter y Bruno Violi siguiendo los diseños del tambien arquitecto Alberto Wills Ferro; fue restaurado y actualizado arquitectonica y tecnologicamente en 2013, un año despues vuelve a abrir sus puertas dando la bienvenida a una nueva generación de estudiantes de ingenieria mostrando con orgullo el proceso de actualización que fue llevado a cabo."
		},
		{
			id:"404",
			Nombre:"Matematicas y fisica",
			Categoria:"Academica clases/Oficinas",
			Facultad:"Ciencias",
			Latitud:"4.637806",
			Longitud:"-74.082302",
			imagenURL:"",
			Historia:"Siendo diseñado durante el periodo constructivo de 'Materiales a la vista'(1943-1952), fue usado originalmente como un edificio anexo de la facultad de ingenieria, actualmente se utiliza como el edificio de matemáticas y fisica, tambien conocido como el edificio Yu Takeuchi en honor al fisico y matemático japones que enseño en la universidad desde 1959 hasta 1989"
		},
		{
			id:"405",
			Nombre:"Postgrados de Matematica y Fisica",
			Categoria:"Academica clases",
			Facultad:"Ciencias",
			Latitud:"4.637747",
			Longitud:"-74.081750",
			imagenURL:"",
			Historia:"Actualmente el edificio conectado al 404 es utilizado actualmente para la impartición de clases de matemáticas y fisica principalmente de materias de postgrado"
		},
		{
			id:"406",
			Nombre:"Laboratorio de ensayo de materiales",
			Categoria:"Academica practicas",
			Facultad:"Ingenieria",
			Latitud:"4.638349",
			Longitud:"-74.082617",
			imagenURL:"",
			Historia:"Fue construido durante el periodo constructivo de 'Ciudad Blanca' (1973-1944), fue usado originalmente como lavoratorio de ensayo de materiales, actualmente se utiliza como instituto de ensayos e investigaciones"
		},
		{
			id:"407",
			Nombre:"Postgrados en materiales y procesos de manufactura",
			Categoria:"Academica clases",
			Facultad:"Ciencias",
			Latitud:"4.639198",
			Longitud:"-74.082191",
			imagenURL:"",
			Historia:"Actualmente usado como edificio de Postgrados de Materiales y Procesos de manufactura, conectado al edifcio 411 de laboratorios de ingenieria, hace parte del sector de Patios de Ingenieria"
		},
		{
			id:"408",
			Nombre:"_Laboratorio de hidraulica",
			Categoria:"Academica practicas",
			Facultad:"Ingenieria",
			Latitud:"4.638265",
			Longitud:"-74.081347",
			imagenURL:"",
			Historia:"Utilizado como laboratorio de ensayos de hidraulica esta ubicado e la parte posterior del edificio 405"
		},
		{
			id:"409",
			Nombre:"Laboratorio de hidraulica",
			Categoria:"Academica practicas",
			Facultad:"Ingenieria",
			Latitud:"4.638265",
			Longitud:"-74.081347",
			imagenURL:"",
			Historia:"Utilizado como laboratorio de hidraulica esta conectado con el edificio 407 por su parte posterior"
		},
		{
			id:"411",
			Nombre:"Laboratorios de ingenieria",
			Categoria:"Academica practica",
			Facultad:"Ingenieria",
			Latitud:"4.639085",
			Longitud:"-74.082436",
			imagenURL:"",
			Historia:"Utilizado como el edificio de laboratorios de ingenieria donde se dictan diversas materias practicas de los programas de pregado, conectado el edifcio 407, hace parte del sector de Patios de Ingenieria"
    },
    {
			id:"412",
			Nombre:"Laboratorios de ingenieria quimica",
			Categoria:"Academica practicas",
			Facultad:"Ingenieria",
			Latitud:"4.638769",
			Longitud:"-74.083158",
			imagenURL:"",
			Historia:"Utilizado como el edifcio de Laboratorios de Ingenieria Quimica, esta ubicado entre el edificio 453 y el complejo de Patios de ingenieria"
		},
		{
			id:"413",
			Nombre:"Observatorio astronomico",
			Categoria:"Academica clases/Administrativo",
			Facultad:"Ciencias",
			Latitud:"4.639741",
			Longitud:"-74.083359",
			imagenURL:"",
			Historia:"Funciona actualmente como sede administrativa academica del Observatorio Astronomico Nacional y en donde se imparten diversas clases orientadas al estudio del cosmos, ubicado cerca al complejo de Patios de Ingenieria"
		},
		{
			id:"414",
			Nombre:"Canchas de tenis",
			Categoria:"Deporte",
			Facultad:"N/A",
			Latitud:"4.639569",
			Longitud:"-74.083679",
			imagenURL:"",
			Historia:"Ubicadas junto al edifcio 413, son utilizadas por los estudientes que practican tenis de forma competitiva o casual"
		},
		{
			id:"421",
			Nombre:"Biologia",
			Categoria:"Academica clases",
			Facultad:"Ciencias",
			Latitud:"4.640484",
			Longitud:"-74.081929",
			imagenURL:"https://lh3.googleusercontent.com/proxy/GWNssEhfUBaiaWBENaUL2FQNDCDQvyhFgu4poCc0wrEmfMx3gMdvowwT2V4RTenfYX-H98mxOvocDqGyYHRkEa6LywFLubkQgSBTIeFf44MqsYHI1yOCFwkN97TjQwgCLkLw",
			Historia:"Utilizado actualmente como dapartamento de Biologia y para impartir diversos tipos de clases, esta ubicado en la parte posterior del edifcio 407"
		},
		{
			id:"425",
			Nombre:"Instituto de ciencias naturales/Museo de historia natural",
			Categoria:"Academico/Museo",
			Facultad:"Ciencias",
			Latitud:"4.642192",
			Longitud:"-74.081911",
			imagenURL:"https://agenciadenoticias.unal.edu.co/typo3temp/_processed_/csm_AgenciaNoticias-20170601-04_06_ac860955da.jpg",
			Historia:"El primer piso del edificio es utilizado como Museo de Historia Natural y actualmente alberga más de 2000 ejemplares representativos de la riqueza biologica de nuestro pais; esta abierto al publico general con un pequeño costo de entrada, esta abierto de Lunes a Viernes de 8:00 am a 12:00 m y 1:00 pm a 5:00 pm, y los sabados de 9:00 am a 12:00 m, ubicado frente al complejo 431"
		},
		{
			id:"426",
			Nombre:"Instituto de genetica",
			Categoria:"Academico clases, investigación",
			Facultad:"Ciencias",
			Latitud:"4.642958",
			Longitud:"-74.082925",
			imagenURL:"https://upload.wikimedia.org/wikipedia/commons/6/6d/InstitutodegeneticaUN.JPG",
			Historia:"Creado en 1993, el Instituto de Genetica de la Universidad Nacional de Colombia-IGUN ha desarrollado actividades de investigación, formación y extensión, que le permiten hacer presencia en diferentes áreas de la genética a nivel vegetal, animal y humano; esta ubicado junto al edificio 425"
		},
		{
			id:"431",
			Nombre:"Instituto pedagogico 'Arturo Ramirez Montufar'/IPARM",
			Categoria:"Academico clases",
			Facultad:"N/A",
			Latitud:"4.641122",
			Longitud:"-74.083090",
			imagenURL:"https://agenciadenoticias.unal.edu.co/typo3temp/_processed_/csm_AgenciaNoticias-20151126-01_12_46977564e7.jpg",
			Historia:"Es el resultado de la fusión entre la Escuela Anexa Arturo Ramirez Montúfar y el Instituto de Aplicación Pedagógica IDAP, que fue realizada en 1989, desde entonces presta el servicio de educación prejardín, primaria y secundaria a los hijos de los funcionarios de la universidad; ubicado frente al edificio 425 y contiene a su vez los edificios 432, 433, 434, 435, 436, 437 y 438"
		},
		{
			id:"450",
			Nombre:"Farmacia",
			Categoria:"Academico clases",
			Facultad:"Ciencias",
			Latitud:"4.637280",
			Longitud:"-74.083532",
			imagenURL:"https://agenciadenoticias.unal.edu.co/uploads/pics/Unimedios_0820_1.jpg",
			Historia:"Actualmente usado para impartir clases del pregado de Farmacia, esta conectado con el edificio 451 y ubica en la parte posterior del edificio 401"
		},
		{
			id:"451",
			Nombre:"Quimica",
			Categoria:"Academico clases",
			Facultad:"Ciencias",
			Latitud:"4.637804",
			Longitud:"-74.083615",
			imagenURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Universidad_Nacional_Sede_Bogot%C3%A1_Dept_qu%C3%ADmica.JPG/470px-Universidad_Nacional_Sede_Bogot%C3%A1_Dept_qu%C3%ADmica.JPG",
			Historia:"Fue diseñado durante el periodo constructivo 'Materiales a la vista'(1943-1952) fue usado originalmenta como la facultad de Quimica e Ingenieria Quimica, ubicado frente al edificio 454, contiene tambien el edificio 452 de Posgrado de Bioquimica y Carbones"
		},
		{
			id:"453",
			Nombre:"Aulas de ingenieria",
			Categoria:"Academica clases",
			Facultad:"Ingenieria",
			Latitud:"4.638501",
			Longitud:"-74.083647",
			imagenURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/AulasDeIngenieriaUN.JPG/470px-AulasDeIngenieriaUN.JPG",
			Historia:"Actualmente presta servicio academico para los estudientes de ingenieria de la Universidad Nacional de Colombia, ubicado junto al edificio 454"
		},
		{
			id:"454",
			Nombre:"Edificio de ciencia y tecnologia/CyT",
			Categoria:"Academico clases/Biblioteca",
			Facultad:"Ingenieria",
			Latitud:"4.638067",
			Longitud:"-74.084684",
			imagenURL:"https://images.adsttc.com/media/images/54d5/1f01/e58e/ce19/1200/0020/large_jpg/Edificio_de_Ciencia_y_Tecnologia_0.jpg?1423253243",
			Historia:"Inaugurado en el año 2008, el Edificio de ciencia y tecnologia/CyT ubicado frente al edificio 451 cuenta con una biblioteca propia con salas de computación y una cafeteria en el piso superior"
		},
		{
			id:"471",
			Nombre:"Medicina",
			Categoria:"Academico clases",
			Facultad:"Medicina",
			Latitud:"4.636412",
			Longitud:"-74.084580",
			imagenURL:"",
			Historia:"Ubicado en la parte posterior del edificio 450, actualmente funciona como area de estudio de los estudiantes de medicina y cuenta con aulas de informatica al servicio de cual estudiante del campus"
		},
		{
			id:"476",
			Nombre:"Edificio de la facultad de ciencias",
			Categoria:"Administrativo",
			Facultad:"Ciencias",
			Latitud:"4.637344",
			Longitud:"-74.085505",
			imagenURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/FacultadDeCiencias.JPG/470px-FacultadDeCiencias.JPG",
			Historia:"Ubicado en la parte occidental del edificio 454, presta servicio administrativo a la facultad de ciencias de la Universidad Nacional de Colombia"
		},
		{
			id:"477",
			Nombre:"Aulas de informatica",
			Categoria:"Academico practica",
			Facultad:"N/A",
			Latitud:"4.636877",
			Longitud:"-74.085292",
			imagenURL:"https://lh3.googleusercontent.com/proxy/ILHmK5ETrYwc-68ri6kkqX3or0Ld00GZ8xH6SXifRh1O1JfRme90DWEl1nLUNwKLYNe8ie4l8vDGvQLtq6fwJ2jdMjKW6TUfthunjBZRa3z3XkgUi1AkccM_1A",
			Historia:"Actualmente presta servicios informaticos a los estudiantes de cualquier facultad de la universidad, ubicada junto al edifcio 471"
		},
		{
			id:"481",
			Nombre:"Veterinaria/Decanatura laboratorio y aulas",
			Categoria:"Academico clases, practica/Administrativo",
			Facultad:"Veterinaria",
			Latitud:"4.636465",
			Longitud:"-74.085347",
			imagenURL:"https://lh3.googleusercontent.com/proxy/6yRDS0Cp4utatBpO22qhnJUgM8whBMeyrJToVCIb9frCECWBBmYiFdYQfmWU8Mu8plzs6cW0BnzsHjX4d6exblK6NCt29euy0CgUubOReR8p5JoGEOfJcaVmrU2jsK0yW1ld_2cyDeUrgFwU5qzCtF4EQrVt",
			Historia:"Diseñado durante el periodo constructivo 'Ciudad Blanca'(1937-1944), fue utilizado desde su inauguración y hasta la fecha como la Escuela de Veterinaria, esta ubicado en el extremo occidental de el edificio 471"
		}	
  ];

  constructor() {}

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.Latitud, marker.Longitud);
      let mapMarker = new google.maps.Marker({
        position: position,
        Nombre: marker.Nombre,
        Latitud: marker.Latitud,
        Longitud: marker.Longitud,
        Categoria:marker.Categoria,
        Facultad:marker.Facultad
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class"firstHeading">' + marker.Nombre + '</h2>' +
                              '<p>Tipo: ' + marker.Categoria + '</p>' +
                              '<p>Facultad: ' + marker.Facultad + '</p>' +
                            '</div>'+
                            '<ion-button id="navigate">IR</ion-button>' +
                            '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('navigate').addEventListener('click', () => {
          console.log('navigate button clicked!');
          // code to navigate using google maps app
          window.open('https://www.google.com/maps/dir/?api=1&destination=' + marker.Latitud + ',' + marker.Longitud);
        });
      });
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  showMap() {
    //se llama al objeto  latitud y logitud de la libreria de maps y se le asignan unas contstantes
    const location = new google.maps.LatLng(4.638769, -74.083158);
    const options = {
      mapId: "8e0a97af9386fef",
      center: location,
      zoom: 18,
      disableDefaultUI: true
      
    }
    //se llama al objeto mapa de la lib de google Maps y se carga en pantalla
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

}

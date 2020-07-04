import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
private lugares=[
{
   id: '1',
   title: 'Campus un',
   imageURL: 'https://www.eltiempo.com/files/image_640_428/uploads/2017/09/21/59c45ca7ae8a2.jpeg',
   comments: ['sfefef','sfefefe']

},
{
  id: '2',
  title: 'Edificio Insignio Julio Garavito',
  imageURL: 'https://d2yoo3qu6vrk5d.cloudfront.net/images/20181204071023/senjal-colombia-20170921-00-482x320.jpg',
  comments: ['Edificio insigne de la facultad de ingeniería','sfdfsf']
}
]

  constructor() { }

  ngOnInit() {
  }
}

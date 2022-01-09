import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  
  selected = 'Colombia';

  localizaciones = [
    {
      tienda: 'Colombia',
      center: { lat: 4.656230252059512, lng: -74.05745237491104 }
    },
    {
      tienda: 'México',
      center: { lat: 19.4267211, lng: -99.1718706 }
    },
    {
      tienda: 'San Francisco',
      center: { lat:37.7820516, lng: -122.4026787 }
    }
  ];

  tienda_elegida = this.localizaciones[0]

  getLocalizacion(tienda: string){
    this.tienda_elegida = this.localizaciones.find(item=>tienda===item.tienda)
    return this.localizaciones.find(item=>tienda===item.tienda)
  ;}
  zoom = 15;
  display?: google.maps.LatLngLiteral;
};
  

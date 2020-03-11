import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import *as Mapboxgl from 'Mapbox-gl';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  
  lat:number=-74.1814651;
  long:number=4.6018307;
  mapa:Mapboxgl.Map;


  constructor() { }

  ngOnInit(): void {
    Mapboxgl.accessToken = environment.mapBoxKey;
    

    this.mapa = new Mapboxgl.Map({
    container: 'mapa', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.lat,this.long], // starting position
    zoom: 16 // starting zoom
  });

  this.crearMarcador(this.long,this.lat);
  }


  crearMarcador(long:number, lat:number){

    var marker = new Mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([long, lat])
      .addTo(this.mapa);

  }

}

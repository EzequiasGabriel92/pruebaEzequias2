import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ETrabajoService {

  equipo:any[]=[{
    nombre:'Ezequias Gabriel Ramirez',
    especialidad:'Desarrollo web',
    descripcion:'Tecnico en sistemas de informacion. estudiante de ingenieria en sistemas. apasionado por el desarrollo y por aprender de este maravilloso mundo.'
  },
  {
    nombre:'Cecilia Mendoza garcia',
    especialidad:'Diseño grafico',
    descripcion:'Tecnico en diseño grafico. estudiante de ingenieria en sistemas. apasionado por el desarrollo y por aprender de este maravilloso mundo.'
  }
]

  constructor() {
    console.log("funcionando servicio");
   }

   obtenerEquipo(){
     return this.equipo;
   }
}
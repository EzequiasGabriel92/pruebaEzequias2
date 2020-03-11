import { Component, OnInit } from '@angular/core';
import {ETrabajoService} from './../e-trabajo.service';


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  equipo:any[]=[];
  constructor(private _servicios:ETrabajoService) {
    this.equipo=_servicios.obtenerEquipo();
  }

  ngOnInit(): void {
  }

}

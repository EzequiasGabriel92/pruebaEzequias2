import { Component, OnInit } from '@angular/core';
import {ConexionService} from 'src/app/services/conexion.service'
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {

  contac:any={
    email:'',
    password:'',
    coments:''
  }

  constructor(private servicios:ConexionService) { }

  ngOnInit(): void {
  }

  agregarForms(){
    this.servicios.agregarContactos(this.contac);
    
    this.contac.email='';
    this.contac.password='';
    this.contac.coments=';'

  }

}

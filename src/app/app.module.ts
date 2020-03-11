
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
//serivicios
import { ETrabajoService} from './e-trabajo.service';
import {ConexionService} from './services/conexion.service';

//firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { ListaComponent } from './components/lista/lista.component';
import { ListaAddComponent } from './components/lista-add/lista-add.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MapaComponent } from './mapa/mapa.component';
import { CrudComponent } from './crud/crud.component';

const appRoutes: Routes = [
  { path: 'contacto', component:ContactoComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path:'galeria', component:GaleriaComponent},
  {path:'mapa', component:MapaComponent},
  {path:'ListaTareasComponent', component: ListaTareasComponent},
  {path: '', component:InicioComponent, pathMatch:'full'},
  {path:'**', redirectTo:'/', pathMatch:'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    ListaTareasComponent,
    ListaComponent,
    ListaAddComponent,
    GaleriaComponent,
    MapaComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    ETrabajoService,
    ConexionService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

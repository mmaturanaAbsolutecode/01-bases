import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

 // personajes : Personaje[] = [];

//  get personajes():Personaje[] {
//    return this.dbzService.personajes;
//  }

  
  nuevo: Personaje = {
    nombre: 'Roshi',
    poder: 20000
  };

  // agregarNuevoPersonaje(argumento: Personaje) {
  //   this.personajes.push(argumento);
  //   console.log(this.personajes);
  // }

  constructor( private dbzService: DbzService) {
    //this.personajes = this.dbzService.personajes;
  }



}

import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0

  }


  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    } else {
      this.personajes.push(this.nuevo);
      console.log(this.nuevo);
      this.nuevo = {
        nombre: '',
        poder: 0
      };
    }


  }

  cambiarNombre(event: any) {

    console.log(event.target.value);

  }

  constructor() { }

  ngOnInit(): void {
  }

}

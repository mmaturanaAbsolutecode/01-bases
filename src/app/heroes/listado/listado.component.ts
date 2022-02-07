import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Goku', 'Vegeta', 'Picollo', 'Gohan'];
  heroeBorrado: string = "";


  borrando() {
    this.heroeBorrado = this.heroes[0];
    this.heroes.splice(0, 1);
  }


}

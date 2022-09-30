import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{
  
  heroes: string[] = ['Hulk','Spiderman','Batman','Thor', 'Ironman']
  heroeBorrado: string = ""
  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || ''
  }
}


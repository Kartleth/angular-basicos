import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';


borrarHeroe(){
  console.log('Borrando...');
  //this.heroes = [];
  //this.heroes.shift(); //borra el primer elemento de la lista hasta que ya no haya 
  //const heroeBorrado = this.heroes.shift() || ''; 
  //console.log(heroeBorrado);
  this.heroeBorrado = this.heroes.shift() || '';
}
}

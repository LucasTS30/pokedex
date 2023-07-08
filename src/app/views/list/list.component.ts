import { Component } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

type Pokemon = { name: string, number: number };

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  nameFilter = '';
  selectedPkm;
  
  get pokemonList():Pokemon[]{
    return this.pokeapi.pokeList.filter((pokemon: Pokemon) => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  } 

  get pkmSprite(){
      const number = ('000' + this.selectedPkm.number).slice(-3);
      return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }

  constructor(
    private pokeapi: PokeapiService
  ) { 
    this.selectedPkm = null;
  }

  ngOnInit() {
    this.pokeapi.listAll();
  }

  selectPokemon(pkm){
    this.selectedPkm = pkm;
  }

}

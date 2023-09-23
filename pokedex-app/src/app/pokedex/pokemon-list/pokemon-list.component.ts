import { Component } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemonList: Pokemon[] = [
    {
      id: 25,
      name: 'Pikachu',
      types: ['Electric'],
      height: '0.4m',
      weight: '6kg',
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
    },
    {
      id: 7,
      name: 'Squirtle',
      types: ['Water'],
      height: '0.5m',
      weight: '9kg',
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
    },
    {
      id: 4,
      name: 'Charmander',
      types: ['Fire'],
      height: '0.6m',
      weight: '8.5kg',
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
    },
    {
      id: 1,
      name: 'Bulbasaur',
      types: ['Grass', 'Poison'],
      height: '0.7m',
      weight: '6.9kg',
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    },
    {
      id: 16,
      name: 'Pidgey',
      types: ['Normal', 'Flying'],
      height: '0.3m',
      weight: '1.8kg',
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png'
    },
    {
      id: 133,
      name: 'Eevee',
      types: ['Normal'],
      height: '0.3m',
      weight: '6.5kg',
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png'
    }
  ];


}

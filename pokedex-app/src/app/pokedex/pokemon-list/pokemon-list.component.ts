import { Component, OnInit, HostListener } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  loadedPokemons = 0;
  batchSize = 18; // Cantidad de Pokémon a cargar por lotes

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemonList();
  }

  loadPokemonList() {
    this.pokemonService.getPokemons(this.loadedPokemons, this.batchSize)
      .subscribe((pokemons: Pokemon[]) => {
        this.pokemonList = [...this.pokemonList, ...pokemons];
        this.loadedPokemons += this.batchSize;
      });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition + windowHeight >= documentHeight) {
      this.loadPokemonList();
    }
  }
}

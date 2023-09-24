import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  isLoading: boolean = false;
  loadedPokemons = 0;
  batchSize = 15; // Cantidad de Pokémon a cargar por lotes

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemonList();
  }

  loadPokemonList() {
    this.isLoading = true;
    this.pokemonService.getPokemons(this.loadedPokemons, this.batchSize)
      .subscribe((pokemons: Pokemon[]) => {
        this.pokemonList = [...this.pokemonList, ...pokemons];
        this.loadedPokemons += this.batchSize;
        this.isLoading = false;
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

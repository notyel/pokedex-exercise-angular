import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input() pokemon: Pokemon = {} as Pokemon;

  formatPokemonId(id: number): string {
    return id.toString().padStart(3, '0');
  }
}

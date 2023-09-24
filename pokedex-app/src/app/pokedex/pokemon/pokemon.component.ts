import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: Pokemon = {} as Pokemon;
  isSvgImage: boolean = false

  formatPokemonId(id: number): string {
    return id.toString().padStart(3, '0');
  }

  ngOnInit(): void {
    // Comprueba si la imagen es un SVG
    this.isSvgImage = this.pokemon.imageUrl.endsWith('.svg');
  }
}
